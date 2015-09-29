/**
 * Convert css.
 * @function convertStyle
 * @param {string} style - CSS string
 * @param {object} options - Optional settings.
 * @param {function} converter - Converter for each selector.
 * @returns {string} - Converted string.
 * @see https://github.com/reworkcss/css
 */

"use strict";

var css = require('css'),
    argx = require('argx');

/** @lends convertStyle */
function convertStyle(style, converter, options) {
    var args = argx(arguments);
    style = args.shift('string');
    converter = args.shift('function');
    options = args.pop('object') || {};
    var parsed = css.parse(style);
    parsed.stylesheet.rules = parsed.stylesheet.rules.map(converter);
    return css.stringify(parsed);
}

module.exports = convertStyle;