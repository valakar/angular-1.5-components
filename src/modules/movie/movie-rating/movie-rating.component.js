import controller from './movie-rating.controller.js';
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
