const mongoose = require('mongoose');
const db = require('../../models/models');
const themeList = db.theme;
const objectList = db.object;

module.exports = (app) => {
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

    app.route('/saveObject')
	.post((req, res, next) => {
	    if(req.body.name && req.body.imgurl && req.body.desc) {
			const object = new objectList();
			object._id = mongoose.Types.ObjectId();
			object.name = req.body.name;
			object.imgurl = req.body.imgurl;
			object.desc = req.body.desc;
			object.tags = req.body.tags;
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

    app.route('/getObjectsByTag')
	.get((req, res, next) => {
	    objectList.find({tags: { $in: req.query.tags}}, (err, objects) => {
		if(err) {
		    console.log(err);
		}
		if(objects) {
		    res.status(200).json(objects);
		} else {
		    next();
		}
	    });
	});
};
