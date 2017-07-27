console.time("xxx")
const User = require('./User')
console.log(`${User.userName} say ${User.sayHello()}`)
console.timeEnd("xxx")

console.time("yyy")
const http = require('http');
const util = require('util')
const url = require('url')

const server = http.createServer((req, res) => {
  console.time("zzz")
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  res.end(util.inspect(url.parse(req.url)));
  console.log(ureq.url)
  console.timeEnd("zzz")

}).listen(8000, () => {
  console.log("http://127.0.0.1:8000");
});
console.timeEnd("yyy")
