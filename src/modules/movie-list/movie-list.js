import angular from 'angular';
import movieListService from './movie-list.service';
import movieListComponent from './movie-list.component';

const movieListModule = angular
    .module('movie-list', [])
    .service('MovieListService', movieListService)
    .component('movieList', movieListComponent);

export default movieListModule;
