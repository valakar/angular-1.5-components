import angular from 'angular';
import movieListComponent from './movie-list.component';

let movieListModule = angular.module('movie-list', [
    ])
    .component('movieList', movieListComponent);

export default movieListModule;
