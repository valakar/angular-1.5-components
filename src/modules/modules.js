import angular from 'angular';
import MovieList from './movie-list/movie-list';
import MovieRating from './movie-rating/movie-rating';
import MovieDetails from './movie-details/movie-details';

export default angular.module('app.components', [
    MovieList.name,
    MovieRating.name,
    MovieDetails.name
]);
