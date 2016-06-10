import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.sass';

import angular from 'angular';
import AppComponent from './app.component.js';
import Components from './components/components';

angular.module('myApp', [
        Components.name
    ])
    .directive('app', AppComponent);