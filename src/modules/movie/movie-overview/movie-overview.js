import angular from 'angular';
import movieOverviewComponent from './movie-overview.component.js';

const movieOverviewModule = angular
    .module('movie-overview', [])
    .component('movieOverview', movieOverviewComponent);

export default movieOverviewModule;
