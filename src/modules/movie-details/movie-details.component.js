import controller from './movie-details.controller';
import template from './movie-details.jade';

const movieDetailsComponent = {
    template: template(),
    controller,
    controllerAs: 'movieDetailsCtrl'
};

export default movieDetailsComponent;
