import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.sass';

import angular from 'angular';
import AppComponent from './app.component.js';
import Modules from './modules/modules';

angular.module('app', [
        Modules.name
    ])
    .directive('app', AppComponent);