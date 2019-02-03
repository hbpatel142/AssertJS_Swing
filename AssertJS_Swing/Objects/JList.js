var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JList extends JObject{
    constructor(list){
        super(list);
        this.list = list;
    }

    /**
     * Clears the selection
     */
    clearSelection(){
        this.list.clearSelectionSync();
    }

    /**
     * click item by index
     * @param {number} index 
     */
    clickItemByIndex(index){
        this.list.clickItemSync(index);
    }

    /**
     * click item by text
     * @param {String} text 
     */
    clickItemByText(text){
        this.list.clickItemSync(text);
    }

    /** 
     * get count of list items
     */
    count(){
        var content = this.list.contentsSync(); 
        return content.length;
    }

    /**
     * get item by index
     * @param {number} index 
     * @returns {String}
     */
    getItem(index){
        var content = this.list.contentsSync();
        return content[index];
    }

    /**
     * get all the selected items
     * @returns {[string]}
     */
    selection(){
        var selection = this.list.selectionSync();
        return selection;
    }

    /**
     * Select item by index
     * @param {number} index 
     */
    selectItemByindex(index){
        this.list.selectItemSync(index);
    }
    
    /**
     * select item by text
     * @param {String} text 
     */
    selectItemByText(text){
        this.list.selectItemSync(text);
    }

    /**
     * get value at an index
     * @param {number} index 
     */
    valueAt(index){
        return this.list.valueAtSync(index);
    }
}

module.exports = JList;