import angular from 'angular';

class objectService {

    constructor($http) {
		this.$http = $http;
    }
	
    getAll() {
	return this.$http
	    .get('/api/getObjects')
	    .then((result) => {
			console.log(result);
			return result;
	    });
    }

    saveObject(object) {
	this.$http
	    .post('/api/saveObject', object)
	    .then((resolvedObject) => {
			console.log('Success');
			return true;
	    }, (err) => {
			console.log(err);
			return false;
	    });
    }
}

export default angular.module('services.object-service', [])
    .service('objectService', objectService)
    .name;
