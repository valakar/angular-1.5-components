import angular from 'angular';
import mocks from 'angular-mocks';

let context = require.context('./src', true, /\.spec\.js/);
context.keys().forEach(context);

beforeEach(() => {
    window.env = sinon.sandbox.create();
});

afterEach(() => {
    window.env.restore();
});