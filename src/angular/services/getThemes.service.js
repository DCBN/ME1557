import angular from 'angular';
import request from 'superagent';

class getThemes {

    constructor($http) {
	this.$http = $http;
    }
    getThemes() {
	/*
	 * TODO: Migrera våra api relaterade funktioner in till services
	 * TODO: Fuck bitches
	 */
	/*return new Promise((resolve, reject) => {
	    request
		.get('/api/getThemes')
		.end((err, res) => {
		    if(err) {
			console.log(err);
			reject(err);
		    } else {
			resolve(res.body);
		    }
		});
	 });*/
	return this.$http
	    .get('/api/getThemes')
	    .then((result) => {
		return result;
	    });
    }
}

export default angular.module('services.get-themes', [])
    .service('getThemes', getThemes)
    .name;
