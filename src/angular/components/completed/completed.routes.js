routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('completed', {
    url: '/tour/theme/:theme/completed',
    template: require('./completed.html'),
    controller: 'CompletedController',
    controllerAs: 'completed'
  });
}
