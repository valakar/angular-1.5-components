import angular from 'angular';
import movieOverviewComponent from './movie-overview.component';

const movieOverviewModule = angular
    .module('movie-overview', [])
    .component('movieOverview', movieOverviewComponent);

export default movieOverviewModule;
