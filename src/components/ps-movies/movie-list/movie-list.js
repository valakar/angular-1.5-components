import angular from 'angular';
import movieListComponent from './home.component';

let homeModule = angular.module('movie-list', [
    ])

    .component('movie-list', movieListComponent);

export default homeModule;
