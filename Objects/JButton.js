var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JButton extends JObject{
    constructor(button){
        super(button);
        this.button=button;  
    }

    

  

    
}

module.exports = JButton;