import controller from './movie-list.controller';
import template from './movie-list.jade';

let movieListComponent = {
    template: template(),
    controller,
    controllerAs: 'MovieListCtrl'
};

export default movieListComponent;
