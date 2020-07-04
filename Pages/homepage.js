let homepage = function()  {

    let first_num = element(by.model('first'));
    let sec_num  = element(by.model('second'));
    let click_btn = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(weburl){
        browser.get(weburl);
    };

    this.enter_firstnum     = function(firstNo){
        first_num.sendKeys(firstNo);


    };
    
    this.enter_secondnum = function(second_num){
        sec_num.sendKeys(second_num);

    };
    this.click_GO_button = function(){
        click_btn.click();

    };

    this.verify_result = function(result){

        let Output = element(by.cssContainingText('.ng-binding' , result));
        expect(Output.getText()).toEqual(result);
    }

};

    module.exports = new homepage();