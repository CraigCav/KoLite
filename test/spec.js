var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);

    if (msg == "ConsoleReporter finished") {
        phantom.exit();
    }
};

page.onLoadFinished = function () {
    page.evaluate(function (specFiles) {
        runTests(specFiles);
    }, ['specs/command.spec']);
};

page.open('spec.html');