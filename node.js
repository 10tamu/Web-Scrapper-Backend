const companies = {
    no:'12',
    name:'google',
    country:'australia'
}

const path = require("path")
//module.exports = companies

exports.companies = companies

console.log(companies);
console.log(`PAth to file is ${path.basename(__dirname)}`)
console.log(__dirname);
console.log(__filename);

console.log(process.pid)
console.log(process.versions.node)
console.log(process.argv[0])