import angular from 'angular';
import MovieList from './movie-list/movie-list';
import MovieRating from './movie-rating/movie-rating';
import MovieDetails from './movie-details/movie-details';
import MovieCast from './movie-cast/movie-cast';
import MovieDirector from './movie-director/movie-director';
import MovieOverview from './movie-overview/movie-overview';

export default angular.module('app.movie', [
    MovieList.name,
    MovieRating.name,
    MovieDetails.name,
    MovieCast.name,
    MovieDirector.name,
    MovieOverview.name
]);
