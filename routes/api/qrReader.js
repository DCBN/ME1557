'use strict';
var QrCode = require('qrcode-reader');
var PNG = require('png-js');
var fs = require('fs');
function decodeQr(url, callback) {
  const c = fs.readFileSync(url);
  const p = new PNG(c);
  p.decode(function(data) {
    var qr = new QrCode();
    qr.callback = function(result){
      callback(result);
    };
    qr.decode(p, data);
  });
};


module.exports = decodeQr;
