const mongoose = require('mongoose');
const db = require('../../models/models');
const themeList = db.theme;

module.exports = (app) => {
    app.route('/saveTheme')
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
	    console.log('Running');
	    console.log(req.body);
        });
};
