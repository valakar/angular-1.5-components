import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.sass';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngComponentRouter from '@angular/router/angular1/angular_1_router';
import AppComponent from './app.component.js';
import Modules from './modules/modules';

angular.module('app', [
        uirouter,
        'ngComponentRouter',
        Modules.name
    ])
    .value('$routerRootComponent', 'app')
    .component("about", {
        template: "About us ..."
    })
    .component('app', AppComponent);