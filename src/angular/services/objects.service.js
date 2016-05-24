import angular from 'angular';

class objectService {

    constructor($http) {
		this.$http = $http;
    }

    getAll() {
	return this.$http
	    .get('/api/getObjects')
	    .then((result) => {
			return result;
	    });
    }

    saveObject(object) {
	this.$http
	    .post('/api/saveObject', object)
	    .then((resolvedObject) => {
			return true;
	    }, (err) => {
			console.log(err);
			return false;
	    });
    }

    getObjectsByTag(tags) {
	return this.$http
	    .get('/api/getObjectsByTag', { params: {tags: tags}})
	    .then((result) => {
		return result;
	    }, (err) => {
		console.log(err);
		return false;
	    });
    }
}

export default angular.module('services.object-service', [])
    .service('objectService', objectService)
    .name;
