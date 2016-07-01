import controller from './movie-list.controller.js';
import template from './movie-list.jade';

const movieListComponent = {
    template: template(),
    controller,
    controllerAs: 'movieListCtrl'
};

export default movieListComponent;
