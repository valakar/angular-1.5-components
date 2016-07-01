import './movie-rating.sass';

import angular from 'angular';
import movieRatingComponent from './movie-rating.component';

const movieListModule = angular
    .module('movie-rating', [])
    .component('movieRating', movieRatingComponent);

export default movieListModule;
