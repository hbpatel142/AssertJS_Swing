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
     */
    text(){
        return this.textComponent.textSync();
    }

    /**
     * Delete Text
     */
    deleteText(){
        return this.textComponent.deleteTextSync();
    }

    /**
     * enter text
     * @param {String} text 
     */
    enterText(text){
        this.textComponent.enterTextSync(text);
    }

    /**
     * set text
     * @param {String} text 
     */
    setText(text){
        this.textComponent.setTextSync(text);
    }
}

module.exports = JtextComponent;