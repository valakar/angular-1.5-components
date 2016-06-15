import angular from 'angular';
import MovieList from  './movie-list/movie-list';

console.log('>> MovieList.name', MovieList.name);

export default angular.module('app.components', [
    MovieList.name
]);
