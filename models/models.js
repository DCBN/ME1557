var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//CHANGE
var scenesSchema = new Schema({
	scene: String,
	text: String,
	bild: String,
	val1: String,
	val1text: String,
	val2: String,
	val2text: String
});

mongoose.model('scenes', scenesSchema);