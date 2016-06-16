export default function routeConfig($urlRouterProvider, $stateProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('list', {
            url: '/list',
            template: '<movie-list></movie-list>'
        })
        .state('about', {
            url: '/about',
            template: '<about></about>'
        })
}