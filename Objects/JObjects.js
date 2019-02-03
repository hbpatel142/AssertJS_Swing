var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

class JObject {
    constructor(object){
        this.object = object;
    }

  /**
     * click mouse button
     * @param {string} type LEFT_BUTTON, RIGHT_BUTTON or MIDDLE_BUTTON
     */
    click(type="LEFT_BUTTON"){
        var btn_type=java.getStaticFieldValue("org.assertj.swing.core.MouseButton",type);
        this.object.clickSync(btn_type);
    }

    /**
     * double click left button
     */
    doubleClick(){
        this.object.doubleClickSync();
    }

    /**
     * checks if the button is enabled
     * @returns {boolean}
     */
    isEnabled(){
        return this.object.isEnabledSync();
    }

    /**
     * Press and Release Keys
     * @param {number} keys 
     */
    pressAndReleaseKeys(num){
        return this.object.pressAndReleaseKeysSync(num);
    }
}

module.exports = JObject;