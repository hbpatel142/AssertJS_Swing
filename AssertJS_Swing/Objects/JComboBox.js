var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JComboBox extends JObject {
    constructor(comboBox){
        super(comboBox);
        this.comboBox = comboBox;
    }

    /**
     * get selected item for a combo box
     * @returns {string}
     */
    selectedItem(){
        return comboBox.selectedItemSync();
    }

    /**
     * Select Item by Index
     * @param {number} index 
     */
    selectItemByIndex(index){
        try{
            this.comboBox.selectItemSync(index);
            return true;
        }catch(e){
            return false;
        }
    }

    /**
     * Select Item by Text
     * @param {String} text 
     */
    selectItemByText(text){
        try{
            this.comboBox.selectItemSync(text);
            return true;
        }catch(e){
            return false;
        }
    }
}

module.exports=JComboBox;