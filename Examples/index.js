var index = require('./../index');

index.setAssertJLibraryPath(__dirname+"/../target/dependency");

var application = index.launchApplication("Simple Calculator","js_assertj.JavaCalculator");
application.addDirToClassPath(__dirname+"/../target/classes");

application.start();

var frame = index.findFrame("Simple.*");
var button = frame.waitForFrame(10000).findButton({"text" : "2"});
console.log(" Button is Enabled :" + button.isEnabled());
button.click();

var buttonplus = frame.waitForFrame(10000).findButton({"text" : "+"});
console.log(" Button is Enabled :" + button.isEnabled());
buttonplus.click();
button.click();

var buttonEqual =frame.waitForFrame(10000).findButton({"text" : "="});
console.log(" Button is Enabled :" + button.isEnabled());
buttonEqual.click();

var result = frame.findTextComponent({"name" : "Result"});
console.log("Result is "+result.text());
