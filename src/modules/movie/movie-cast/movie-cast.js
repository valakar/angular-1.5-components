import angular from 'angular';
import movieCastComponent from './movie-cast.component.js';

const movieCastModule = angular
    .module('movie-cast', [])
    .component('movieCast', movieCastComponent);

export default movieCastModule;
