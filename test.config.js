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

if (!Array.prototype.find) {
    Array.prototype.find = function(check) {
        var findFn = check;

        if (typeof findFn !== 'function') {
            findFn = function(item) {
                return item === check;
            };
        }

        return this.filter(findFn)[0];
    };
}
