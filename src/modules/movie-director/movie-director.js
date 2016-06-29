import angular from 'angular';
import movieDirectorComponent from './movie-director.component';

const movieDirectorModule = angular
    .module('movie-director', [])
    .component('movieDirector', movieDirectorComponent);

export default movieDirectorModule;
