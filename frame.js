var javaInit = require('./javainit');
var java = javaInit.getJavaInstance();



class Frame {
    constructor(name,robot){
        this.swingFrame = java.callStaticMethodSync("js_assertj.Using","getFrameByTitle",name,robot);
        this.name=name;
        this.robot=robot;
    }
    /**
     * Find Button on the frame using name or text
     * @param {{text,name}} By text or name
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

    findCheckBox(By={"name":""}){
        var checkbox;
        if( !('name' in By))
            throw "FindCheckBox : name is not found in By";

        checkbox = java.newInstanceSync("org.assertj.swing.fixture.JCheckBoxFixture",this.robot,By.name);
    
        var JCheckBox = require('./JCheckBox');
        return new JCheckBox(checkbox);
    }

    findComboBox(By={"name":""}){
        var combobox;
        if(!('name' in By))
            throw "FindComboBox : name is not found in By";

        combobox = java.newInstanceSync("org.assertj.swing.fixture.JComboBoxFixture",this.robot,By.name);
        var JComboBox = require('./JComboBox');
        return new JComboBox(combobox);
    }

    findLabel(By={"name":""}){
        var label;
        if(!('name' in By))
            throw "FindLabel : name is not found in By";

        label = java.newInstanceSync("org.assertj.swing.fixture.JLabelFixture",this.robot,By.name);
        var JLabel = require('./JLabel');

        return new JLabel(label);
    }

    findTextComponent(By={"name":""}){
        var textComponent ;
        if(!('name' in By))
            throw "FindTextComponent : name is not found in By";

        textComponent = java.newInstanceSync("org.assertj.swing.fixture.JTextComponentFixture",this.robot,By.name);

        var JTextComponent = require('./Objects/JTextComponent');

        return new JTextComponent(textComponent);
    }

    findList(By={"name":""}){
        var list;
        if(!('name' in By))
            throw "FindList : name is not found in By";

        list = java.newInstanceSync("org.assertj.swing.fixture.JListFixture",this.robot,By.name);

        var JList = require('./JList');

        return new JList(list);
    }

    findMenuItem(By={"name":""}){
        var menuItem;
        if(!('name' in By))
            throw "findMenuItem : name is not found in By";

        menuItem = java.newInstanceSync("org.assertj.swing.fixture.JMenuItemFixture",this.robot,By.name);

        var JMenuItem = require('./JMenu');
        return new JMenuItem(menuItem);
    }

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