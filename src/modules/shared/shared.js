import angular from 'angular';
import back from './back.component';

const sharedModule = angular
    .module('shared', [])
    .component('back', back);

export default sharedModule;
