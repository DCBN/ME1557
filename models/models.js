const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const themeSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  name: String,
  imgUrl: String,
  tags: Array 
});

const objectSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  name: String,
  imgurl: String,
  desc: String,
  answer: String,
  tags: Array
});

const tagSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  name: String
});

const theme =  mongoose.model('Theme', themeSchema);
const object = mongoose.model('Object', objectSchema);
const tag = mongoose.model('Tag', tagSchema);


module.exports = {
  theme: theme,
  object: object,
  tag: tag
};
