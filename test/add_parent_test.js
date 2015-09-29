/**
 * Test case for addParent.
 * Runs with nodeunit.
 */

var addParent = require('../lib/add_parent.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Add parent'] = function (test) {
    var converted = addParent('body{background:#FFF}', 'html');
    test.equal(converted, "html body {\n  background: #FFF;\n}");
    test.done();
};

