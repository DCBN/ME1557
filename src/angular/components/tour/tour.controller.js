class TourController {
    constructor($stateParams, $location, themeService) {
	const param = $stateParams.theme;
	if(param === "" || !param || typeof param === "undefined") {
            $location.path('/tour/theme');
        } else {
	    this.themeService = themeService;
	    themeService.getTheme(param).then((result) => {
		let theme = this.theme;
		theme = result.data[0];
		console.log(theme.tags);
	    });
	   /*themeService.getTheme(param).then((result) => {
		console.log(result.data[0]);
	    });*/

	}

	
    }
    logIt() {
	console.log(this.theme);
    }
}

export default TourController;

