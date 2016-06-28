const controller = ($window) => ({
    back: () => {
        $window.history.back();
    }
});

export default {
    template: '<a ng-click="$ctrl.back()"><ng-transclude></ng-transclude><a>',
    controller,
    transclude: true
};
