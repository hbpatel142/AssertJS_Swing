var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JMenu extends JObject{
    /**
     * 
     * @param {*} menu 
     * @returns {JMenu}
     */
    constructor(menu){
        super(menu);
        this.menu = menu;
    }
}

module.exports = JMenu;