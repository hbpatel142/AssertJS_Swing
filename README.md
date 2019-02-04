# AssertJS_Swing
Java Swing GUI Automation

This is Javascript wrapper of Assertj-swing Library. It has currently limited functionality from original java library.However, It can be always extended similar to java library.
[Original Java Library](http://joel-costigliola.github.io/assertj/assertj-swing-getting-started.html)

[Google Group Discussion](https://groups.google.com/forum/#!forum/assertjs-swing)

Important Note - This API is still in development phase. It will have frequent updates for couple of weeks.

##Pre-Requisites

Follow documentation to install java : [NPM java](https://www.npmjs.com/package/java)

download AssertJ-swing Java library from Maven and add on java classpath

```
var assertjs = require('assertjs-swing');
assertjs.setAssertJLibraryPath(__dirname+"/../Library");
```

##Application

get application Instance using below code. this wont launch the application yet. Swing application jar files and all the dependencies must be added before starting the application. Any JVM related arguments can be also added.

```
var application = assertjs.newApplication("Simple Calculator","js_assertj.JavaCalculator");
application.addDirToClassPath(__dirname+"/../target/classes");
application.addJarToClassPath(__dirname+"/../target/classes/js_Assertj");

application.addJavaOptions("-DEnvironmentName=EnvironmentValue");

application.start();
```

##Frame

Once application is started, all the objects can be accessed by frame directly.

Title can be string or regex string. But it has to be unique

```
var frame = assertjs.findFrame("Simple.*");
```

##Objects
All the objects can be found using name. Currently only button supports find by text. In future, more options to find objects would be implemented.