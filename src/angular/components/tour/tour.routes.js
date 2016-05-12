routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
	.state('tour', {
	    url: '/tour',
	    template: require('./tour.html'),
	    controller: 'TourController',
	    controllerAs: 'tour'
	});
 }


