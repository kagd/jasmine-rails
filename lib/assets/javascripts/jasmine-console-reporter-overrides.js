/**
 Jasmine Reporter that outputs test results to the browser console.
 Useful for running in a headless environment such as PhantomJs, ZombieJs etc.

 Usage:
 // From your html file that loads jasmine:
 jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());
 jasmine.getEnv().execute();
*/

(function(jasmine, console) {
  if (!jasmine) {
    throw "jasmine library isn't loaded!";
  }

  if (jasmine.ConsoleReporter == undefined || jasmine.ConsoleReporter == null) {
    throw "ConsoleReporter isn't loaded.";
  }

  var proto = jasmine.ConsoleReporter.prototype;
  proto.reportSuiteResults = function(suite) {
    if (!suite.parentSuite) { return; }
    var results = suite.results();
    if (results.totalCount === 0) {
      return;
    }
    var failed = results.totalCount - results.passedCount;
    if (failed > 0) {
      this.log(suite.description + ": " + results.passedCount + " of " + results.totalCount + " passed.", 'red');
    }
  };

})(jasmine, console);
