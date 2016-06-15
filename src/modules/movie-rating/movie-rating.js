import angular from 'angular';
import movieRatingComponent from './movie-rating.component';

let movieListModule = angular.module('movie-rating', [
    ])
    .component('movieRating', movieRatingComponent);

export default movieListModule;
