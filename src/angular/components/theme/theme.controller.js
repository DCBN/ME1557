<<<<<<< HEAD
 class ThemeController {
     constructor(themeService) {
         this.themeService = themeService;
 	      themeService.getAll().then(result => this.themes = result.data);
     }
 }
 
 export default ThemeController;
 ThemeController.$inject = ['themeService'];
=======
class ThemeController {
    constructor(themeService) {
        this.themeService = themeService;
        themeService.getAll().then(result => this.themes = result.data);
    }
}

export default ThemeController;
ThemeController.$inject = ['themeService'];
>>>>>>> acdee842d4a344a4b1adaea60e28537641e13358
