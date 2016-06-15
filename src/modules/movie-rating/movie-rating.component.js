import controller from './movie-rating.controller';
import template from './movie-rating.jade';

let movieRatingComponent = {
    template: template(),
    controller,
    controllerAs: 'MovieRatingCtrl',
    transclude: true,
    bindings: {
        value: "<"
    },
    bindToController: true
};

export default movieRatingComponent;
