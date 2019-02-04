var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JList extends JObject{
    /**
     * 
     * @param {*} list 
     * @returns {JList}
     */
    constructor(list){
        super(list);
        this.list = list;
    }

    /**
     * Clears the selection
     * @returns {JList}
     */
    clearSelection(){
        this.list.clearSelectionSync();
        return this;
    }

    /**
     * click item by index
     * @param {number} index
     * @returns {JList} 
     */
    clickItemByIndex(index){
        this.list.clickItemSync(index);
        return this;
    }

    /**
     * click item by text
     * @param {String} text 
     * @returns {JList}
     */
    clickItemByText(text){
        this.list.clickItemSync(text);
        return this;
    }

    /** 
     * get count of list items
     * @returns {Number}
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
     * @returns {JList}
     */
    selectItemByindex(index){
        this.list.selectItemSync(index);
        return this;
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