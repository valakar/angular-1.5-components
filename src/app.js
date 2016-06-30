import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import './styles/index.sass';

import angular from 'angular';
import '@angular/router/angular1/angular_1_router';
import angularAnimate from 'angular-animate';
import AppComponent from './app.component.js';
import Modules from './modules/modules';

angular
    .module('app', [
        'ngComponentRouter',
        angularAnimate,
        Modules.name
    ])
    .value('$routerRootComponent', 'app')
    .component('about', {
        template: 'About us ...'
    })
    .component('app', AppComponent);
