/**
 * Test case for convertStyle.
 * Runs with nodeunit.
 */

var convertStyle = require('../lib/helper/convert_style.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Convert'] = function(test){
    var converted = convertStyle('body{background:#FFF}', function(rule){
        rule.selectors = rule.selectors.map(function(selector){
            return ['html', selector].join(' ');
        });
        return rule;
    });
    test.ok(converted);
    test.done();
};

