var rework = require('rework');
var contrast = require('rework-color-distinguish');
var rework_mixin = require('rework-plugin-mixin');
var mixins = require('rework-mixins');
var indent = require('css-whitespace');
var clearfix = require('rework-clearfix');

module.exports = exports = function(option) {
    return function(input) {
        var css = indent(input);
        var css = rework(css)
            .use(rework_mixin(mixins))
            .use(contrast())
            .use(clearfix)
            .toString();
        return css;
    }
}
