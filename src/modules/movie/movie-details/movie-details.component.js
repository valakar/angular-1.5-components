import controller from './movie-details.controller.js';
import template from './movie-details.jade';
import $routeConfig from './movie-details.routes';

const movieDetailsComponent = {
    template: template(),
    controllerAs: 'movieDetailsCtrl',
    $routeConfig,
    controller
};

export default movieDetailsComponent;
