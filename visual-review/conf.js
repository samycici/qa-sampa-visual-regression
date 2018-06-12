const VisualReview = require('visualreview-protractor');
var vr = new VisualReview({
    hostname: 'localhost',
    port: 7000
});

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    restartBrowserBetweenTests: false,
    specs: ['pokedex_visual_test.js'],
    allScriptsTimeout: 100000,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-extensions']
        }

    },
    beforeLaunch: function() {
        return vr.initRun('pokedex_qa_sampa', 'visual');

    },

    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },

    afterLaunch: function(exitCode) {
        // finalizes the run, cleans up temporary files
        return vr.cleanup(exitCode);
    },

    // expose VisualReview protractor api in tests
    params: {
        visualreview: vr
    }


}
