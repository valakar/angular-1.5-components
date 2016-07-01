import angular from 'angular';
import movieDetailsService from './movie-details.service.js';
import movieDetailsComponent from './movie-details.component.js';

const movieDetailsModule = angular
    .module('movie-details', [])
    .service('MovieDetailsService', movieDetailsService)
    .component('movieDetails', movieDetailsComponent);

export default movieDetailsModule;
