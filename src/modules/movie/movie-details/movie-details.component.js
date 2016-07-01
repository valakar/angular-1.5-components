import controller from './movie-details.controller.js';
import template from './movie-details.jade';

const movieDetailsComponent = {
    template: template(),
    $routeConfig: [
        { path: '/overview', component: 'movieOverview', name: 'Overview' },
        { path: '/cast', component: 'movieCast', name: 'Cast' },
        { path: '/director', component: 'movieDirector', name: 'Director' }
    ],
    controller,
    controllerAs: 'movieDetailsCtrl'
};

export default movieDetailsComponent;
