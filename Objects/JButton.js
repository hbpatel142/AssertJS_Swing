var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JButton extends JObject{

    /**
     * 
     * @param {*} button
     * @returns {JButton} 
     */
    constructor(button){
        super(button);
        this.button=button;  
    }

    

  

    
}

module.exports = JButton;