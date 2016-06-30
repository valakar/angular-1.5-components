import template from './accordion-panel.jade';
import controller from './accordion-panel.controller';

export default {
    bindings: {
        heading: '@'
    },
    template: template(),
    require: {
        parent: '^accordion'
    },
    transclude: true,
    controllerAs: 'accordionPanelCtrl',
    controller
};
