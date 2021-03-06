import angular from 'angular';


import MovieModules from './movie/modules';
import Shared from './shared/shared';
import Accordion from './accordion/accordion';

export default angular.module('app.components', [
    MovieModules.name,
    Shared.name,
    Accordion.name
]);
