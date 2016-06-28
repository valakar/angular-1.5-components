import angular from 'angular';
import movieDetailsComponent from './movie-details.component';

const movieDetailsModule = angular
    .module('movie-details', [])
    .component('movieDetails', movieDetailsComponent);

export default movieDetailsModule;
