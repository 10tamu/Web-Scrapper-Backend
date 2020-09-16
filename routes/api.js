const express = require("express");
const router = express.Router();
var request = require("request");
var cheerio = require("cheerio");

router.post("/scrape", (req, res) => {
  // jobsearch-SerpJobCard unifiedRow row result clickcard
  const data = req.body;
  indeed_url = `https://au.indeed.com/jobs?q=${data.jobTitle}&l=${data.place}`;
  request(indeed_url, (err, response, html) => {
    if (!err) {
      // Cheerio library will return html which also will provide jQury functionalities
      var $ = cheerio.load(html);
      var lstLinks = [];
      var lstLocations = [];
      var lstJobTitle = $(".title").children().text().trim().split("\n");
      var lstCompany = $(".company").text().split("\n").toString().split(",").filter((i)=> i!= '');
      var locationUnsorted = $(".recJobLoc").next();
      var linkUnsorted = $(".jobtitle");
      linkUnsorted.each((item) => {
        lstLinks.push(
          "https://au.indeed.com" +
            linkUnsorted[item]["attribs"]["href"].toString()
        );
      });
      locationUnsorted.each((item) => {
        lstLocations.push(
          locationUnsorted[item]["children"].map((i) => i.data).toString()
        );
      });
      var jobList = {
        title: lstJobTitle,
        company: lstCompany,
        location: lstLocations,
        jobLink: lstLinks,
      };

      return res.json({ jobList: jobList });
    } else {
      console.error("error occured" + err);
    }
  });
  console.log();
  // class Name jobsearch-SerpJobCard unifiedRow row result clickcard

  // return res.json({ msg: "your data has been received!!!!" });
});

module.exports = router;
