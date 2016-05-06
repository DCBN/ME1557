class ThemeController {
    constructor(themeService) {
        this.themeService = themeService;
	      themeService.getAll().then(result => this.themes = result.data);
        this.getThemeInfo();
    }

    getThemeInfo() {
        console.log(this.themes);
    }
}

export default ThemeController;
ThemeController.$inject = ['themeService'];
