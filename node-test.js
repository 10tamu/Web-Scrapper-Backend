const http = require("http");
const express = require("express");
const app = express();
const companies = require("./node");

app.get("/", (req, res) => {
  res.send("hi");
});

const server = app.listen(3000, () =>
  console.log("------------------------------")
);


const doSomething =()=>{
  return new Promise(resolve =>{
    setTimeout(()=>resolve('doing something'),3000)
  })
}

const testDOSomething =  async() =>{
  const msg = await doSomething()
  return msg + "\n and I knew it"
}

const doubleTest = async()=>{
  const msgs = await testDOSomething()
  return msgs + "\n and I knew it you knew"
} 

doubleTest().then(res => console.log(res))
//console.log(new Promise(resolve=> {return resolve(data)}))
// console.log('before')
// testDOSomething()
// console.log('after')




//console.log('\x1b[33m%s\x1b[0m', companies.companies)

// const first = () => console.log("first method");

// const second = () => console.log("second method");

// const third = () => {
//   console.log("third method");
//   setTimeout(() => {
//     first();
//   }, 0);
//   new Promise((resolve, reject) => {
//     resolve("should be right after second, before first");
//   }).then((resolve) => console.log(resolve));
//   second();
// };

// third();

// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// readline.question('how are you',(ans)=>{
//     console.log(`You are ${ans}`)
//     readline.close()
// })
//console.log("My %s is %d percent mad", "boyfriend", 100);

// const getAPI = () => console.log('getting gcal data')

// const getTime = () =>{
//     console.time('getAPI()')
//     getAPI()
//     console.timeEnd('getAPI()')
// }
// getTime()
// const companies = ['google','apple','microsoft','google']

// companies.forEach(company =>{
//     console.count(company)
// })
// process.argv.forEach((val,index)=>{
//     console.log(`${val}: ${index}`)
// })

// const data = require('minimist')(process.argv.slice(2))
// console.log(data['name'])

// process.on('SIGTERM', () =>{
//     server.close(()=>{
//         console.log('process terminated!!!!')
//     })
// })
