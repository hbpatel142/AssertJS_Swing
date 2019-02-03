var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JLabel extends JObject{
    constructor(label){
        super(label);
        this.label=label;
    }

    /**
     * Get text of the label
     */
    getText(){
        return this.label.textSync();
    }
}

module.exports = JLabel;