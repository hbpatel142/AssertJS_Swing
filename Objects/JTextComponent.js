var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JtextComponent extends JObject{
    constructor(textComponent){
        super(textComponent);
        this.textComponent = textComponent;
    }

    /**
     * get text 
     * @returns {String}
     */
    text(){
        return this.textComponent.textSync();
    }

    /**
     * Delete Text
     * @returns {JtextComponent}
     */
    deleteText(){
        this.textComponent.deleteTextSync();
        return this;
    }

    /**
     * enter text
     * @param {String} text 
     */
    enterText(text){
        this.textComponent.enterTextSync(text);
        return this;
    }

    /**
     * set text
     * @param {String} text 
     * @returns {JtextComponent}
     */
    setText(text){
        this.textComponent.setTextSync(text);
        return this;
    }
}

module.exports = JtextComponent;