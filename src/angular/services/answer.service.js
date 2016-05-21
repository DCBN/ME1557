import angular from 'angular';

class answerService {
  constructor($http){
    this.$http = $http;
  }
  post(uploadUrl, data) {
    let fd = new FormData();
    for(let key in data) {
      fd.append(key, data[key]);
    }
    this.$http
      .post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      });
    }
  }

export default angular.module('services.answer-service', [])
    .service('answerService', answerService)
    .name;
