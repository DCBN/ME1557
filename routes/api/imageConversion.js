const sharp = require('sharp');
const decodeQr = require('./qrReader');

function convertImage(image, callback) {
  console.log(image);
  const name = image + '.png';
  sharp(image)
    .png()
    .toFile(name, (err, info) => {
      if (err){
        console.log(err)
      } else {
        decodeQr(name, callback);
      };
    });
};

module.exports = convertImage;
