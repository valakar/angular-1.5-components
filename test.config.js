import 'angular';
import 'angular-mocks';

var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);

beforeEach(function() {
    window.env = sinon.sandbox.create();
});

afterEach(function() {
    window.env.restore();
});