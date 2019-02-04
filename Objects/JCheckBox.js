var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JCheckBox extends JObject {

    /**
     * Create Checkbox Object
     * @param {*} checkbox
     * @returns {JCheckBox} 
     */
    constructor(checkbox){
        super(checkbox);
        this.checkbox = checkbox;
    }

    /**
     * Checks if checkbox is checked
     * @returns {boolean}
     */
    isChecked(){
        try{
            this.checkbox.requireSelectedSync();
            return true;
        }catch(e){
            return false;
        }    
    }

    /**
     * check the checkbox
     */
    check(){
        this.checkbox.checkSync();
    }

    /**
     * uncheck the checkbox
     */
    uncheck(){
        this.checkbox.uncheckSync();
    }
}

module.exports=JCheckBox;