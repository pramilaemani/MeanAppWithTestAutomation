var protractor = require('protractor');

describe('Mean stack POC Test', function() {
         beforeEach(function() {
           browser.get('http://localhost:3000/');
            // ptor = protractor.getInstance();
           });
  
        it('should click on the Campaign Details Link', function() {
               element(by.xpath('/html/body/div/ul/li[2]/a')).click();
           expect(element(by.xpath('//h3')).getText()).toEqual('Campaign Details Page');
           });
        it('should click on the Vin Details Link', function() {
               element(by.xpath('/html/body/div/ul/li[3]/a')).click();
           expect(element(by.xpath('//h3')).getText()).toEqual('Vin Details Page');
           });             
        
});
