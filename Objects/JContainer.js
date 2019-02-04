var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JContainer extends JObject{

    /**
     * 
     * @param {*} container 
     * @returns {JContainer}
     */
    constructor(container){
        super(container);
        this.container = container;
    }

    /**
     * get button from the container
     * @param {{name}} By 
     * @returns {JButton}
     */
    button(By={"name":""}){
        var JButton = require('./JButton');
        return new JButton(this.container.buttonSync(By.name));
    }

    /**
     * get checkBox from the container
     * @param {{name}} By 
     * @returns {JCheckBox}
     */
    checkBox(By={"name":""}){
        var JCheckBox = require('./JCheckBox');
        return new JCheckBox(this.container.checkBoxSync(By.name));
    }
}