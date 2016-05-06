import angular from 'angular';

class themeService {

    constructor($http) {
	this.$http = $http;
    }
    getAll() {
	return this.$http
	    .get('/api/getThemes')
	    .then((result) => {
		return result;
	    });
    }


    saveTheme(theme) {
	this.$http
	    .post('/api/saveTheme', theme)
	    .then((resolvedTheme) => {
		console.log('Success');
		return true;
	    }, (err) => {
		console.log(err);
		return false;
	    });
    }
}

export default angular.module('services.theme-service', [])
    .service('themeService', themeService)
    .name;
