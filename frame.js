var javaInit = require('./javainit');
var java = javaInit.getJavaInstance();



class Frame {
    constructor(name,robot){
        //this.swingFrame = java.callStaticMethodSync("js_assertj.Using","getFrameByTitle",name,robot);
        this.name=name;
        this.robot=robot;
    }

    /**
     * Wait for frame based on the name(Pattern)
     * @param {Number} timeout 
     * @returns {Frame}
     */
    waitForFrame(timeout){
        var pattern =".*"+this.name+".*";
        var jPattern = java.callStaticMethodSync("java.util.regex.Pattern","compile",pattern);
        var frameMatcher = java.callStaticMethodSync("org.assertj.swing.core.matcher.FrameMatcher","withTitle",jPattern);
        this.swingFrame = java.callStaticMethodSync("org.assertj.swing.finder.WindowFinder","findFrame",frameMatcher).withTimeoutSync(timeout).usingSync(this.robot);
        return this;
    }

    /**
     * Find Button on the frame using name or text
     * @param {{text,name}} By text or name
     * @returns {JButton}
     */
    findButton(By={"text":"","name":""}){
        var button;
        if(!('text' in By)&&!('name' in By))
            throw "findButton : text or name is not found in By";
        if('text' in By){
            button= java.callStaticMethodSync("js_assertj.Using","getButtonByText",this.swingFrame,By.text);
        }else{
            button= java.newInstanceSync("org.assertj.swing.fixture.JButtonFixture",this.robot,By.name);
        }

        var JButton = require('./Objects/JButton');
        return new JButton(button);
    }

    /**
     * Find checkbox using name
     * @param {{name}} By 
     * @returns {JCheckBox}
     */
    findCheckBox(By={"name":""}){
        var checkbox;
        if( !('name' in By))
            throw "FindCheckBox : name is not found in By";

        checkbox = java.newInstanceSync("org.assertj.swing.fixture.JCheckBoxFixture",this.robot,By.name);
    
        var JCheckBox = require('./Objects/JCheckBox');
        return new JCheckBox(checkbox);
    }

    /**
     * Find combobox by name
     * @param {{name}} By 
     * @returns {JComboBox}
     */
    findComboBox(By={"name":""}){
        var combobox;
        if(!('name' in By))
            throw "FindComboBox : name is not found in By";

        combobox = java.newInstanceSync("org.assertj.swing.fixture.JComboBoxFixture",this.robot,By.name);
        var JComboBox = require('./Objects/JComboBox');
        return new JComboBox(combobox);
    }

    /**
     * Find Label by name
     * @param {{name}} By 
     * @returns {JLabel}
     */
    findLabel(By={"name":""}){
        var label;
        if(!('name' in By))
            throw "FindLabel : name is not found in By";

        label = java.newInstanceSync("org.assertj.swing.fixture.JLabelFixture",this.robot,By.name);
        var JLabel = require('./Objects/JLabel');

        return new JLabel(label);
    }

    /**
     * Find component by name
     * @param {{name}} By 
     * @returns {JTextComponent}
     */
    findTextComponent(By={"name":""}){
        var textComponent ;
        if(!('name' in By))
            throw "FindTextComponent : name is not found in By";

        textComponent = java.newInstanceSync("org.assertj.swing.fixture.JTextComponentFixture",this.robot,By.name);

        var JTextComponent = require('./Objects/JTextComponent');

        return new JTextComponent(textComponent);
    }

    /**
     * Find list by name
     * @param {{name}} By 
     * @returns {JList}
     */
    findList(By={"name":""}){
        var list;
        if(!('name' in By))
            throw "FindList : name is not found in By";

        list = java.newInstanceSync("org.assertj.swing.fixture.JListFixture",this.robot,By.name);

        var JList = require('./Objects/JList');

        return new JList(list);
    }

    /**
     * Find Menu Item
     * @param {{name}} By 
     * @returns {JMenuItem}
     */
    findMenuItem(By={"name":""}){
        var menuItem;
        if(!('name' in By))
            throw "findMenuItem : name is not found in By";

        menuItem = java.newInstanceSync("org.assertj.swing.fixture.JMenuItemFixture",this.robot,By.name);

        var JMenuItem = require('./Objects/JMenu');
        return new JMenuItem(menuItem);
    }

    /**
     * Find option pane
     * @param {{name}} By
     * @returns {JOptionPane} 
     */
    findOptionPane(By={"name":""}){
        var optionPane;
        if(!('name' in By))
            throw "findMenuItem : name is not found in By";

        optionPane = java.newInstanceSync("org.assertj.swing.fixture.JOptionPaneFixture",this.robot,By.name);

        var JOptionPane = require('./Objects/JOptionPane');

        return new JOptionPane(optionPane);
    }
}

module.exports = Frame;