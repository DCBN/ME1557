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
    return this.$http
      .post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      }).then((result) => {
        return result.data;
      });
  }
}

export default angular.module('services.answer-service', [])
  .service('answerService', answerService)
  .name;
