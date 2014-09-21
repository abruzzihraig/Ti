var assert = require('chai').assert;
var Ti = require('..')();
var read = require('fs').readFileSync;

var input = read(__dirname + '/input.ti', 'utf8');
var expect = read(__dirname + '/expect.css', 'utf8').trim();

describe('compare two css files', function() {
    it('should equivalent which compiled css and expect css', function() {
        var css = Ti(input);
        assert.equal(css, expect);
    });
});

