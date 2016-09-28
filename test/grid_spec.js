var protractor = require('protractor');
path = require('path');

//fetch data from the excel in order to provide data to the test cases
cellFromXLS = function (cellId) {
    'use strict';
    //Define sheetNumber
    var sheetNumber = 0;
    //Define file Path name
    var fileNamePath = path.join('C:/MeanAppWithTestAutomation-master/test/', 'data.xls');
    //NodeJs read file
    var XLS;
    if (typeof require !== 'undefined') {
        XLS = require('xlsjs');
    }
    //Working with workbook
    var workbook = XLS.readFile(fileNamePath);
    var sheetNamelist = workbook.SheetNames;
    var value = workbook.Sheets[sheetNamelist[sheetNumber]][cellId].v;
    return value;
};

describe('Mean stack POC Test', function() {
         beforeEach(function() {
           browser.get('http://localhost:3000/');
            // ptor = protractor.getInstance();
           });
  
        it('should click on the Campaign Details Link', function() {
               element(by.xpath('/html/body/div/ul/li[2]/a')).click();
           expect(element(by.xpath('//h3')).getText()).toEqual('Campaign Details Page');
           });
        it('should return campaigns for the vinid entered', function(){
          var vinid = cellFromXLS('B2');
                element(by.id('inputVinId').sendKeys(vinid));
                button = element(by.id('btnSubmit'));
                button.click();
                results = element.all(by.repeater('campdet in selCampDetails'));
                expect(results.count()).toEqual(2);
                element(by.model('form.vinid')).clear();
        });
        it('should click on the Vin Details Link', function() {
               element(by.xpath('/html/body/div/ul/li[3]/a')).click();
           expect(element(by.xpath('//h3')).getText()).toEqual('Vin Details Page');
           });                     
        it('should return Vins for the vinid entered', function(){
                
        });
});
