var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Theme = new Schema({
    id: //,
	name: String,
    imgUrl: String,
    tags: String
});

var Object = new Schema({
    id: //,
    name: String,
    imgUrl: String,
    desc: String,
    tags: Array   
});

var Tag = new Schema({
   id: //,
   name: String, 
});

mongoose.model('scenes', scenesSchema);