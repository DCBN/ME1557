import request from 'superagent';

class AdminController {

    constructor(getThemes) {
	//this.getAllThemes();
	this.themes = [];
	this.getThemes = getThemes;
	getThemes.getThemes().then(result => this.themes = result.data);
    }

    name() {
//	this.themes = this.themes.data;
	console.log(this.themes);
    }
    setTheme() {
        const name = this.themeName;
        const imgurl = this.themeImgurl;
	const theme = { name: name, imgUrl: imgurl };
	const url = '/api/saveTheme';
	this.save(theme, url);
    }

    setObject() {
	const name = this.objectName;
	const imgurl = this.objectImgurl;
	const desc = this.objectDesc;
	const object = { name: name, imgurl: imgurl, desc: desc };
	const url = '/api/saveObject';
	this.save(object, url);
    }

    save(object, url) {
        request
	    .post(url)
            .send(object)
            .end((err, res) => {
                if(err) {
                    console.log(err);
                } else {
		    console.log('Successfully saved into DB');
		}
            });
    }

    getAllThemes() {
	request
	    .get('/api/getThemes')
	    .end((err, res) => {
		if(err) {
		    console.log(err);
		} else {
		    console.log(res.body);
		    this.themes = res.body;
		}
	    });
    }
}
	   

export default AdminController;
AdminController.$inject = ['getThemes'];
