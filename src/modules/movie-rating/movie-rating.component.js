import controller from './movie-rating.controller';
import template from './movie-rating.jade';

const movieRatingComponent = {
    template: template(),
    controller,
    controllerAs: 'movieRatingCtrl',
    bindings: {
        value: '<',
        max: '<',
        setRating: '&'
    },
    bindToController: true
};

export default movieRatingComponent;
