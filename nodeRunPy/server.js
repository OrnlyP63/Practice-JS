let http = require('http');
let dt = require('./myfirstModule.js');
let url = require('url');
http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write('The date and time are currently : '+dt.myDateTime());
  //res.write(req.url);
  //res.end('\nHello World');
  let q = url.parse(req.url, true).query;
  let txt = q.year + ' ' + q.month;
  res.end(txt);
}).listen(8000);
