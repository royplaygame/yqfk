
var path = require('path');
var http = require('http');
var https = require('https')
var fs = require('fs')
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware')
var proxy = require('express-http-proxy')
require('./API/config.js')
var app = express()
app.use(express.static(path.join(__dirname, '/dist/')))
var proxyTable = {
  '/login': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/yqfk': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/admin': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/user': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/device': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/dept': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/member': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/visitor': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/record': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/attendance': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/calibration': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/developer': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
  '/doc': {
    target: "https://" + global.IP + ":" + global.Port,
    changeOrigin: true
  },
}

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})


// app.get('/login',function(req,res){
//   var age = req.query.age
//   console.log(age)

//     res.status(200).send(age)
// })

// server.listen(port);
// app.listen(3001, function () {
//   console.log('server start')
// })

https.createServer({
  key: fs.readFileSync('./static/1557085_api.shapelight.net.key'),//证书文件的存放目录
  cert: fs.readFileSync('./static/1557085_api.shapelight.net.crt')
},app).listen(3001,'0.0.0.0');//https默认是443端口