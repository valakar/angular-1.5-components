import controller from './accordion.controlller';

export default {
    template: '<div class="panel-group" ng-transclude></div>',
    transclude: true,
    controllerAs: 'accordionCtrl',
    controller
};
