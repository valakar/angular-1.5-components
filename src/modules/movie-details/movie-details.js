import angular from 'angular';
import movieDetailsService from './movie-details.service';
import movieDetailsComponent from './movie-details.component';

const movieDetailsModule = angular
    .module('movie-details', [])
    .service('MovieDetailsService', movieDetailsService)
    .component('movieDetails', movieDetailsComponent);

export default movieDetailsModule;
