import template from './app.jade';

let appComponent = () => {
    return {
        template,
        restrict: 'E'
    };
};

export default appComponent;
