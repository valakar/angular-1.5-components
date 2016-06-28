import template from './app.jade';

const appComponent = {
    template: template(),
    $routeConfig: [
        {
            path: '/list',
            component: 'movieList',
            name: 'List'
        },
        {
            path: '/about',
            component: 'about',
            name: 'About'
        },
        {
            path: '/**',
            redirectTo: ['List']
        }
    ]
};

export default appComponent;
