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
        /*
         * Skicka data till route
         * Just nu får vi inte datan som vi skickar i (Send)
         * Når aldrig slutet av funktionen
         * "Promise kan vara onödigt"
         */
        console.log(name + url);
        return new Promise((resolve, reject) => {
        request
            .post('/api/saveTheme')
                .send({name: 'Something'})
                .on('error', (error) => {
                    reject(error);
                })
                .end((err, res) => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log('Success: ' + res);
                    }
                });
        });
    }

}

export default AdminController;
