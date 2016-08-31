/**
 * See https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 */

var path = require('path');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var screenReporter = new HtmlScreenshotReporter({
  dest: './test-reports/e2e',
  filename: 'index.html',
  ignoreSkippedSpecs: true,
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: false,
  showQuickLinks: true,

  cleanDestination: true,
  // conflicts with cleanDestination if set
  showSummary: true,
  showConfiguration: true,
  reportTitle: "E2E Test Results", //"E2E Test Results"

  preserveDirectory: true,
  pathBuilder: function(currentSpec, suites, browserCapabilities) {
    // will return chrome/your-spec-name.png
    return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
  },
  metadataBuilder: function(currentSpec, suites, browserCapabilities) {
    return { id: currentSpec.id, os: browserCapabilities.get('browserName') };
  }
});

const config = {
  baseUrl: 'http://localhost:5555/',

  specs: [
    './src/client/**/*.e2e-spec.ts'
  ],

  exclude: [],

  // 'jasmine' by default will use the latest jasmine framework
  framework: 'jasmine',

  // allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,

    // showTiming: true,
    showColors: true,
    silent: true,
    isVerbose: false,
    includeStackTrace: false,
    // defaultTimeoutInterval: 400000
    defaultTimeoutInterval: 400000,
    print: function() {
    }
  },

  // Safari does not support direct connect
  directConnect: false,

  multiCapabilities: [{
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }],

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve) {
      screenReporter.beforeLaunch(resolve);
    });
  },

  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: true,    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
      displayFailuresSummary: true, // display summary of all failures after execution
      displayPendingSummary: true,  // display summary of all pending specs after execution
      displaySuccessfulSpec: true,  // display each successful spec
      displayFailedSpec: true,      // display each failed spec
      displayPendingSpec: false,    // display each pending spec
      displaySpecDuration: false,   // display each spec duration
      displaySuiteNumber: true,    // display each suite number (hierarchical)
      colors: {
        success: 'green',
        failure: 'red',
        pending: 'yellow'
      },
      prefixes: {
        success: '✓ ',
        failure: '✗ ',
        pending: '* '
      },
      customProcessors: []
    }));

    browser.ignoreSynchronization = false;

    /**
     * At this point, global 'protractor' object will be set up, and
     * jasmine will be available.
     *
     * The require statement must be down here, since jasmine-reporters
     * needs jasmine to be in the global and protractor does not guarantee
     * this until inside the onPrepare function.
     */
    // var jasmineReporters = require('jasmine-reporters');
    // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    //   consolidateAll: true,
    //   filePrefix: 'xmloutput',
    //   savePath: './test-reports/e2e'
    // }));

    jasmine.getEnv().addReporter(screenReporter);

  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve) {
      screenReporter.afterLaunch(resolve.bind(this, exitCode));
    });

  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
  useAllAngular2AppRoots: true
};

if (process.env.TRAVIS) {
  config.capabilities = {
    browserName: 'firefox'
  };
}

exports.config = config;
