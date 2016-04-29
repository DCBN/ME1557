routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
	.state('theme', {
	    url: '/theme',
	    template: require('./theme.html'),
	    controller: 'ThemeController',
	    controllerAs: 'theme'
	});
 }


