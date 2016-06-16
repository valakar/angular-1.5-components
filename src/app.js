import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.sass';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Modules from './modules/modules';
import router from './router';

angular.module('app', [
        uirouter,
        Modules.name
    ])
    .config(router)
    .component("about", {
        template: "About us ..."
    })
    .directive('app', AppComponent);