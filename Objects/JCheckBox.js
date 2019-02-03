var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JCheckBox extends JObject {
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
        try{
            this.checkbox.checkSync();
            return true;
        }catch(e){
            return false;
        }
    }

    /**
     * uncheck the checkbox
     */
    uncheck(){
        try{
            this.checkbox.uncheckSync();
            return true;
        }catch(e){
            return false;
        }
    }
}

module.exports=JCheckBox;