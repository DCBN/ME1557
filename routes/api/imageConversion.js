const sharp = require('sharp');
const decodeQr = require('./qrReader');

function convertImage(image, filename) {
  console.log(image);
  const name = image + '.png';
  sharp(image)
  .png()
  .toFile(name, (err, info) => {
    if (err){
      console.log(err)
    } else {
      decodeQr(name);
    };
  });
};

module.exports = convertImage;
