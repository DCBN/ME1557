const mongoose = require('mongoose');
const db = require('../../models/models');
const themeList = db.theme;
const objectList = db.object;

module.exports = (app) => {
    app.route('/saveTheme/')
	.post((req, res, next) => {
	    if(req.body.name && req.body.imgUrl) {
		const theme = new themeList();
		theme._id = mongoose.Types.ObjectId();
		theme.name = req.body.name;
		theme.imgUrl = req.body.imgUrl;
		theme.save();
		res.status(200).end();
	    } else {
		next();
	    }
        });

    app.route('/saveObject')
	.post((req, res, next) => {
	    if(req.body.name && req.body.imgurl && req.body.desc) {
		console.log(req.body);
		const object = new objectList();
		object._id = mongoose.Types.ObjectId();
		object.name = req.body.name;
		object.imgurl = req.body.imgurl;
		object.desc = req.body.desc;
		object.save();
		res.status(200).end();
	    } else {
		next();
	    }
	});

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
};
