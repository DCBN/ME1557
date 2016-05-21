'use strict';
var QrCode = require('qrcode-reader');
var PNG = require('png-js');
var fs = require('fs');
function decodeQr(url) {
  const c = fs.readFileSync(url);
  const p = new PNG(c);
  p.decode(function(data) {
    var qr = new QrCode();
    qr.callback = function(result){
      console.log(result);
    };
    qr.decode(p, data);
  });
};


module.exports = decodeQr;
