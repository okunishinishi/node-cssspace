/**
 * Add parent selector to each selector.
 * @function wrap
 * @param {string} style - CSS string
 * @param {string} parent - Parent selector name.
 * @param {object} options - Optional settings.
 * @returns {string} - Converted string.
 */

"use strict";

var convertStyle = require('./helper/convert_style');

function wrap(style, parent, options) {
    parent = parent && String(parent).trim();
    return convertStyle(style, function (rule) {
        rule.selectors = rule.selectors.map(function (selector) {
            if (!parent) {
                return selector;
            }
            return [].concat(parent).concat(selector).join(' ');
        });
        return rule;
    }, options);
}

module.exports = wrap;
