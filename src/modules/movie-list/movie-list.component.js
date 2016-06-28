import controller from './movie-list.controller';
import template from './movie-list.jade';

const movieListComponent = {
    template: template(),
    controller,
    controllerAs: 'movieDetailsCtrl'
};

export default movieListComponent;
