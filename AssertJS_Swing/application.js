var javaInit = require('./javainit');
var java = javaInit.getJavaInstance();
var fs = require("fs");

/**
 * swing application
 */
class Application {
    /**
     * @param {string} name 
     * @param {string} applicationClass 
     * @param {string} Args
     */
    constructor(name,applicationClass,Args=""){
        this.name = name;
        this.applicationClass = applicationClass;
        this.Args = Args;
       
    }

    /**
     * Add files from Directory to class path
     * @param {string} dir 
     */
    addDirToClassPath(dir){

        var dependencies = fs.readdirSync(dir);

        dependencies.forEach(function(dependency){
            java.classpath.push(dir + "/" + dependency);
        })

    }

    /**
     * add jar with full path on classpath
     * @param {string} jar 
     */
    addJarToClassPath(jar){
        java.classpath.push(jar);
    }

    /**
     * Start Application
     */
    start(){
        this.BasicRobot = java.import("org.assertj.swing.core.BasicRobot");
        this.Robot=this.BasicRobot.robotWithNewAwtHierarchySync();
        this.instance = java.callStaticMethodSync("org.assertj.swing.launcher.ApplicationLauncher","application",this.applicationClass);
        if(this.rgs!="")
            this.instance = this.instance.withArgsSync(this.Args);
    
        this.instance.startSync();
    }

    getRobot(){
        return this.Robot;
    }   
}

module.exports = Application;