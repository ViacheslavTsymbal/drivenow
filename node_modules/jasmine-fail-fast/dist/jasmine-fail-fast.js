'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.init = init;
exports.getSpecReferences = getSpecReferences;
exports.disableSpecs = disableSpecs;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var refs = undefined;

// Jasmine doesn't yet have an option to fail fast. This "reporter" is a workaround for the time
// being, making Jasmine essentially skip all tests after the first failure.
// https://github.com/jasmine/jasmine/issues/414
// https://github.com/juliemr/minijasminenode/issues/20

function init() {
  refs = getSpecReferences();

  return {
    specDone: function specDone(result) {
      if (result.status === 'failed') {
        disableSpecs(refs);
      }
    }
  };
}

/**
 * Gather references to all jasmine specs and suites, through any (currently hacky) means possible.
 *
 * @return {Object} An object with `specs` and `suites` properties, arrays of respective types.
 */

function getSpecReferences() {
  var specs = [];
  var suites = [];

  // Use specFilter to gather references to all specs.
  jasmine.getEnv().specFilter = function (spec) {
    specs.push(spec);
    return true;
  };

  // Wrap jasmine's describe function to gather references to all suites.
  jasmine.getEnv().describe = _lodash2['default'].wrap(jasmine.getEnv().describe, function (describe) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var suite = describe.apply(null, args);
    suites.push(suite);
    return suite;
  });

  return {
    specs: specs,
    suites: suites
  };
}

/**
 * Hacky workaround to facilitate "fail fast". Disable all specs (basically `xit`), then
 * remove references to all before/after functions, else they'll still run. Disabling the
 * suites themselves does not appear to have an effect.
 */

function disableSpecs() {
  if (!refs) {
    throw new Error('jasmine-fail-fast: Must call init() before calling disableSpecs()!');
  }

  refs.specs.forEach(function (spec) {
    return spec.disable();
  });

  refs.suites.forEach(function (suite) {
    suite.beforeFns = [];
    suite.afterFns = [];
    suite.beforeAllFns = [];
    suite.afterAllFns = [];
  });
}
