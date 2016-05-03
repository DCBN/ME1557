module.exports = (app) => {
    app.route('/saveTheme')
        .post((req, res, next) => {
            console.log(req.body);
            console.log(req.name);
            res.end('Hello');
            console.log(req.body);
            console.log(req.name);
        });
};
