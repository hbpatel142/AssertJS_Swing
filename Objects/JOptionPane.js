var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');
var JButton = require('./JButton');

class JOptionPane extends JObject {
    constructor(optionPane){
        super(optionPane);
        this.optionPane = optionPane;
    }

    /**
     * Get Button with Text
     * @param {String} text 
     * @returns {JButton}
     */
    buttonWithText(text){
        return this.optionPane.buttonWithTextSync(text);
    }

    /**
     * Get Cancel Button
     * @returns {JButton}
     */
    cancelButton(){
        return this.optionPane.cancelButtonSync();
    }

    /**
     * Get No Button
     * @returns {JButton}
     */
    noButton(){
        return this.optionPane.noButtonSync();
    }

    /**
     * Get OK Button
     * @returns {JButton}
     */
    okButton(){
        return this.optionPane.okButtonSync();
    }

     /**
     * Get Yes Button
     * @returns {JButton}
     */
    yesButton(){
        return this.optionPane.yesButtonSync();
    }

    /**
     * Get Title
     * @returns {String}
     */
    title(){
        return this.optionPane.titleSync();
    }

    /**
     * Asserts message in option pane
     * @param {String} message 
     */
    requireMessage(message){
        try{
        this.optionPane.requireMessageSync(message);
        return true;
        }catch(e)
        {
            return false;
        }
    }
}