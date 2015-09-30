/**
 * Test case for wrap.
 * Runs with nodeunit.
 */

var wrap = require('../lib/wrap.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Add parent'] = function (test) {
    var converted = wrap('body{background:#FFF}', 'html');
    test.equal(converted, "html body {\n  background: #FFF;\n}");
    test.done();
};

