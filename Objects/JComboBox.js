var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JComboBox extends JObject {

    /**
     * 
     * @param {*} comboBox 
     * @returns {JComboBox}
     */
    constructor(comboBox){
        super(comboBox);
        this.comboBox = comboBox;
    }

    /**
     * get selected item for a combo box
     * @returns {string}
     * @returns {string}
     */
    selectedItem(){
       return this.comboBox.selectedItemSync();  
    }

    /**
     * Select Item by Index
     * @param {number} index 
     * @returns {JComboBox}
     */
    selectItemByIndex(index){
        this.comboBox.selectItemSync(index);
        return this;
    }

    /**
     * Select Item by Text
     * @param {String} text 
     */
    selectItemByText(text){
            this.comboBox.selectItemSync(text);
    }
}

module.exports=JComboBox;