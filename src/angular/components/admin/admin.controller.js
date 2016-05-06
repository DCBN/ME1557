class AdminController {

    constructor(themeService, objectService) {

	this.themeService = themeService;
	this.objectService = objectService;
	themeService.getAll().then(result => this.themes = result.data);
	objectService.getAll().then(result => this.objects = result.data);

    }

    postTheme() {
        const name = this.themeName;
        const imgurl = this.themeImgurl;
	const theme = { name: name, imgUrl: imgurl };
	this.themeService.saveTheme(theme);
    }

    postObject() {
	const name = this.objectName;
	const imgurl = this.objectImgurl;
	const desc = this.objectDesc;
	const object = { name: name, imgurl: imgurl, desc: desc };
	this.themeService.saveTheme(object);
    }
}
	   

export default AdminController;
AdminController.$inject = ['themeService', 'objectService'];

