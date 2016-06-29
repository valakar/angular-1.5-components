import angular from 'angular';
import movieCastComponent from './movie-cast.component';

const movieCastModule = angular
    .module('movie-cast', [])
    .component('movieCast', movieCastComponent);

export default movieCastModule;
