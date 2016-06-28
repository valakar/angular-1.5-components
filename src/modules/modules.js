import angular from 'angular';
import MovieList from './movie-list/movie-list';
import MovieRating from './movie-rating/movie-rating';

export default angular.module('app.components', [
    MovieList.name,
    MovieRating.name
]);
