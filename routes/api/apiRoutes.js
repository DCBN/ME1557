'use strict';
const mongoose = require('mongoose');
const db = require('../../models/models');
const themeList = db.theme;
const objectList = db.object;

const decodeQr = require('./qrReader');
const convertImage = require('./imageConversion');

module.exports = (app) => {

  // Route for saving themes
  app.route('/saveTheme')
    .post((req, res, next) => {
      if(req.body.name && req.body.imgUrl) {
        const theme = new themeList();
        theme._id = mongoose.Types.ObjectId();
        theme.name = req.body.name;
        theme.imgUrl = req.body.imgUrl;
        theme.tags = req.body.tags;
        theme.save();
        res.status(200).end();
      } else {
        next();
      }
    });

    // Route for saving objects
    app.route('/saveObject')
      .post((req, res, next) => {
        if(req.body.name && req.body.imgurl && req.body.desc) {
          const object = new objectList();
          object._id = mongoose.Types.ObjectId();
          object.name = req.body.name;
          object.imgurl = req.body.imgurl;
          object.desc = req.body.desc;
          object.tags = req.body.tags;
          object.answer = req.body.answer;
          object.save();
          res.status(200).end();
        } else {
          next();
        }
      });

      // Route for retrieving all themes
      app.route('/getThemes')
        .get((req, res, next) => {
          themeList.find((err ,themes) => {
            if(err) {
              console.log(err);
              return false;
            }
            if(themes) {
              res.status(200).json(themes);
            } else {
              next();
            }
          });
        });

        // Route for retrieving all objects
        app.route('/getObjects')
          .get((req, res, next) => {
            objectList.find((err, objects) => {
              if(err) {
                console.log(err);
                return false;
              }
              if(objects) {
                res.status(200).json(objects);
              } else {
                next();
              }
            });
          });

          // Route for retrieving themes by name
          app.route('/getThisTheme')
            .get((req, res, next) => {
              const theme = req.query.theme;
              themeList.find({'name': theme}, (err, theme) => {
                if(err) {
                  console.log(err);
                }
                if(theme) {
                  res.status(200).json(theme);
                } else {
                  next();
                }
              });
            });

            // Route for retrieving objects by tags
            app.route('/getObjectsByTag')
              .get((req, res, next) => {
                console.log(req.query.tags);
                if(req.query.tags) {
                  objectList.find({tags: { $in: req.query.tags}}, (err, objects) => {
                    if(err) {
                      console.log(err);
                    }
                    if(objects) {
                      shuffle(objects);
                      res.status(200).json(objects);
                    } else {
                      next();
                    }
                  });
                } else {
                  next();
                }
              });

              app.route('/qrUpload')
                .post((req, res, next) => {
                  var answer;
                  if(req.files[0].mimetype !== 'image/png') {
                    console.log(req.files[0].mimetype);
                    const image = _base + 'uploadedMaterial/' + req.files[0].filename;
                    convertImage(image, (result) => {
                      res.json({success: true, answer: result});
                    });
                  } else {
                    const image = _base + 'uploadedMaterial/' + req.files[0].filename;
                    decodeQr(image, (result) => {
                     res.json({success: true, answer: result}); 
                    });
                  }
                });
                // Function for array shuffling
                var shuffle = (array) => {
                  // Assign variable to the length of the Array
                  let counter = array.length;

                  // While counter is larger that zero then run the shuffling
                  while(counter > 0) {
                    // Pick a random index
                    let index = Math.floor(Math.random() * counter);

                    // Decrease the counter by 1
                    counter--;

                      /*
                    * Assign Array object at counter to temp
                    * Swap the object at counter with the random index object
                    */
                    let temp = array[counter];
                    array[counter] = array[index];
                    array[index] = temp;
                  }
                  // Return array shuffled
                  return array;
                };
};

//decodeQr('/home/dcbn/Downloads/qr.png');
