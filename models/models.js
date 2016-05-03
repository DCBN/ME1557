var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Theme = new Schema({
    _id: Schema.Types.ObjectId
	name: String,
    imgUrl: String,
    tags: String,
    unique: true
});

var Object = new Schema({
    _id: Schema.Types.ObjectId
    name: String,
    imgUrl: String,
    desc: String,
    tags: Array, 
    unique: true 
});

var Tag = new Schema({
   _id: Schema.Types.ObjectId,
   name: String, 
   unique: true
});

mongoose.model('scenes', scenesSchema);