import angular from 'angular';

function fileUpload($parse) {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      var model = $parse(attrs.fileUpload);
      var modelSetter = model.assign;
      element.bind('change', () => {
        scope.$apply(() => {
          modelSetter(scope, element[0].files[0]);
        })
      })
    }
  }
}

export default angular.module('directives.fileUpload', [])
  .directive('fileUpload', fileUpload)
  .name;
