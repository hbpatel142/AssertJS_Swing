var javaInit = require('../javainit');
var java = javaInit.getJavaInstance();

var JObject = require('./JObjects');

class JMenu extends JObject{
    constructor(menu){
        super(menu);
        this.menu = menu;
    }
}

module.exports = JMenu;