const http = require('http')
const fs = require('fs')
const url = require('url')
const util = require('util')

http.createServer(function (req, res) {

  let pathname = url.parse(req.url).pathname;

  fs.readFile(pathname.substring(1), (err, data) => {
    if (err) {
      console.error(err)
      res.writeHead(404, {"Content-Type": 'text/html'})
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      res.write(data.toString())
    }

    res.end();
  });

}).listen(2017, () => console.log("start server, http://localhost:2017"))
