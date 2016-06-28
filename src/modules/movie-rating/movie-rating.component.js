import controller from './movie-rating.controller';
import template from './movie-rating.jade';

const movieRatingComponent = {
    template: template(),
    controller,
    controllerAs: 'MovieRatingCtrl',
    transclude: true,
    bindings: {
        value: '<'
    },
    bindToController: true
};

export default movieRatingComponent;
