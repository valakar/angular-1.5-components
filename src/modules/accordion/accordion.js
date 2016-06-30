import angular from 'angular';
import accordion from './accordion.component';
import accordionPanel from './accordion-panel.component';

const accordionModule = angular
    .module('accordion', [])
    .component('accordion', accordion)
    .component('accordionPanel', accordionPanel);

export default accordionModule;
