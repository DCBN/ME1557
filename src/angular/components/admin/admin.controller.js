import request from 'superagent';

class AdminController {

    constructor() {
        this.themeName;
        this.themeImgurl;
    }

    setVars() {
        const name = this.themeName;
        const imgurl = this.themeImgurl;
        console.log('Name: ' + name + ' imgurl: ' + imgurl);
        this.save(name, imgurl);
    }

    save(name, url) {
        request
	    .post('/api/saveTheme')
            .send({ name: name, imgUrl: url})
            .on('error', (error) => {
                reject(error);
            })
            .end((err, res) => {
                if(err) {
                    console.log(err);
                } else {
		    console.log('Theme: ' + res.body.name + ' created');
		}
            });
    }

}

export default AdminController;
