var jsApiReporter;
(function() {
  var jasmineEnv = jasmine.getEnv();

  jsApiReporter = new jasmine.JsApiReporter();
  jasmineEnv.addReporter(jsApiReporter);

  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);
  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  if (jasmine.ConsoleReporter) {
    jasmineEnv.addReporter(new jasmine.ConsoleReporter());
  }

  function execJasmine() {
    jasmineEnv.addReporter(new jasmine.TrivialReporter());
    if(jasmine.PhantomJSReporter){
      jasmineEnv.addReporter(new jasmine.PhantomJSReporter(true));
    }
    jasmineEnv.execute();
  }

  if (window.addEventListener) { // W3C
    window.addEventListener('load', execJasmine, false);
  } else if (window.attachEvent) { // MSIE
    window.attachEvent('onload', execJasmine);
  }
})();
