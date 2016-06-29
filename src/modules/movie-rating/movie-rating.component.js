import controller from './movie-rating.controller';
import template from './movie-rating.jade';

const movieRatingComponent = {
    template: template(),
    controller,
    controllerAs: 'MovieRatingCtrl',
    bindings: {
        value: '<',
        max: '<'
    },
    bindToController: true
};

export default movieRatingComponent;
