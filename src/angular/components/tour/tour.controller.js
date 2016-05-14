class TourController {
    constructor($stateParams, $location, themeService, objectService) {
	const param = $stateParams.theme;
	if(param === "" || !param || typeof param === "undefined") {
            $location.path('/tour/theme');
        } else {
	    this.themeService = themeService;
	    this.objectService = objectService;

	    themeService.getTheme(param).then((result) => {
		let theme = this.theme;
		theme = result.data[0];

		objectService.getObjectsByTag(theme.tags).then((objects) => {
		    console.log(objects.data);
		    this.objectsForRender = objects.data;
		});
	    });
	}
    }
}

export default TourController;

