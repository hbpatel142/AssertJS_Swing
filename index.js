var javaInit = require('./javainit');
var java = javaInit.getJavaInstance();
var Application = require('./application');
var Frame = require('./frame');
var fs = require("fs");


 function setAssertJLibraryPath(dir){

    var dependencies = fs.readdirSync(dir);

    dependencies.forEach(function(dependency){
        java.classpath.push(dir + "/" + dependency);
    })

}

/**
 * Launch Application
 * @param {string} name 
 * @param {string} ApplicationClass class must be on classpath
 */
function LaunchApplication(name,ApplicationClass,Args){
    this.applicationInstance = new Application(name,ApplicationClass);
    return this.applicationInstance;
}

function findFrame(name){
    var frame = new Frame(name,this.applicationInstance.getRobot());
    return frame;
}

module.exports={
    "launchApplication" : LaunchApplication,
    "findFrame"         : findFrame,
    "java"              : java,
    "setAssertJLibraryPath" : setAssertJLibraryPath
}