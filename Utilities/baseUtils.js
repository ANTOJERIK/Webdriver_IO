class baseUtils{
    CliBtn(element){
        element.click();
    }
    toaddValue(element,text){
       // element.waitForDisplayed();
        element.addValue(text);
    }
    togetValue(element){
     //  element.waitForDisplay();
       return element.getValue();
    }
}
module.exports =new baseUtils();