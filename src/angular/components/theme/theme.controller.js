class ThemeController {
    constructor(themeService) {
        this.themeService = themeService;
	      themeService.getAll().then(result => this.themes = result.data);
    }
}

export default ThemeController;
ThemeController.$inject = ['themeService'];
