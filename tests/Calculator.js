
    let homepage = require('../Pages/homepage');


describe ('demo calculator test', function() {

        it ('addition test' , function() {

             homepage.get('http://juliemr.github.io/protractor-demo/');


            homepage.enter_firstnum('5');

            homepage.enter_secondnum('7');

            homepage.click_GO_button();

            homepage.verify_result('12');
            
            browser.sleep(2000);


        });

          it ('Substraction test' , function() {
  
               homepage.get('http://juliemr.github.io/protractor-demo/');
  
  
              homepage.enter_firstnum('5');
  
              homepage.enter_secondnum('7');
  
              homepage.click_GO_button();
  
              homepage.verify_result('14');
              
              browser.sleep(3000);
  
  
          });

});