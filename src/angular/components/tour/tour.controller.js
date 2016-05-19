class TourController {
    constructor($stateParams, $location, $cookies, themeService, objectService) {
	const param = $stateParams.theme;
	if(param === "" || !param || typeof param === "undefined") {
	    $location.path('/tour/theme');
	} else {
	    this.themeService = themeService;
	    this.objectService = objectService;

	    themeService.getTheme(param).then((result) => {
		let theme = this.theme;
		theme = result.data[0];
		let cookie = {};
		objectService.getObjectsByTag(theme.tags).then((objects) => {
		    for(var i = 0; i < objects.data.length; i++) {
			let question = "question" + Math.floor(i + 1);
			cookie[question] = {"objectData": objects.data[i], "complete": false};
		    };
		    this.objectsForRender = objects.data;
		    $cookies.put('someCookie', JSON.stringify(cookie));
		    let mycookie = $cookies.get('someCookie');
		});
	    });
	}
    }
}

export default TourController;

