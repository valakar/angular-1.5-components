import template from './accordion-panel.jade';

export default {
    bindings: {
        heading: '@'
    },
    template: template(),
    transclude: true
};
