var request = require("request");
var prototype = require("../app.js");
var mongo = require("../mongo.js");
//DB related 
var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017/prototypeDB';

var base_url="http://localhost:3000/";
var getvcdetsURL = "http://localhost:3000/getvindets";
var getcampdetsURL= "http://localhost:3000/getcampdets";
var using = require('jasmine-data-provider');


var log4js = require('log4js');
log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('tests.log'), 'tests');
var logger = log4js.getLogger('tests');
logger.setLevel(log4js.levels.TRACE);


var traceLogger = function (message) {
        logger.trace('message');
    };

var errorLogger = function (message) {
        logger.trace(message);
    };


var search = function(collection) {

    var result = collection.find({}, function(err) {     
        return 'search_Complete';
    });

};

var getCamp = function(collection, campid){
	var result = collection.find({'CAMPAIGN_ID':campid}, function(err){
		return 'returned_all_campaigns';
	});
};

var getVin = function(collection, vinid){
	var result = collection.find({'VIN_ID':vinid}, function(err){
		return 'returned_all_campaigns';
	});
};

describe("prototypeAppTest", function(){

    it("returns status code 200", function(){
            logger.trace ("Testcase 1: ServerStartup......");
            request.get(base_url, function(error, response,body,vindetslist){
                expect(response.statusCode).toBe(200);
                expect(body).toBe(vindetslist);                
                logger.trace ("End of Testcase 1 ......");              
            });

        });

    it("returns status code 200", function(){
            logger.trace ("Testcase 2: GET /getvindets");
            request.get(getvcdetsURL, function(error, response, body, Campdetslist){
                expect(response.statusCode).toBe(200);
                expect(body).toBe(Campdetslist);                             
                logger.trace ("End of Testcase 2 ......");
                
            });

        });

    it("returns status code 200", function(){
            logger.trace ("Testcase 3: GET /getcampdets");
            request.get(getcampdetsURL, function(error, response, body){
                expect(response.statusCode).toBe(200);                            
                logger.trace ("End of Testcase 3 ......");             
                
            });

        });
    it("fetches all records from campaign table", function(){
            logger.trace ("Testcase 4: Connection to the mongodb");             
                MongoClient.connect(dbUrl, function(err, db){                    
                    assert.equal(null, err);
                    //fetch all from camp Details
                    var collection = db.get('campdetcollection');
                    search(collection, function(error, result){                        
                        expect(result).toEqual('search_Complete');
                    });
                                                                          
                });
        }); 
    it("fetches all records from VinDetails table", function(){
            logger.trace ("Testcase 5: Fetching all records from VinDetails");              
                MongoClient.connect(dbUrl, function(err, db){
                    assert.equal(null, err);
                    //fetch all from Vin Details
                    var collection = db.get('vindetscollection');
                    search(collection, function(error, result){
                        expect(result).toEqual('search_Complete');
                    });
                    logger.trace ("End of Testcase 5: ");                                                      
                });
        }); 

        //This fetches the documents matching with the given vinid from the DB

    it("fetches all vin Details for the given VIN ID", function(){
            logger.trace ("Testcase 6: Fetching all vin details for the given VIN_ID");             
                MongoClient.connect(dbUrl, function(err, db){
                    assert.equal(null, err);
                    //fetch all from Vin Details
                    var collection = db.get('vindetscollection');
                    var vinid = "CAMPAIGNDOBJ00021";

                    getCamp([collection, vinid], function(error, result){
                        expect(result).toEqual('returned_all_vindetails');
                    });

                    logger.trace ("End of Testcase 6: ");
                                 
                });
        }); 

    it("fetches all Campaign Details for the given CAMPAIGN_ID", function(){
            logger.trace ("Testcase 7: fetches all Campaign Details for the given CAMPAIGN_ID");            
                MongoClient.connect(dbUrl, function(err, db){
                    assert.equal(null, err);
                    //fetch all from Campaign Details
                    var collection = db.get('campdetcollection');
                    var campid = "RT8";

                    getVin([collection, campid], function(error, result){
                        expect(result).toEqual('returned_all_campaigns');
                    });

                    logger.trace ("End of Testcase 7: ");                    
                                   
                });
        });

    it("Negative test case for campaign Id", function(){
            logger.trace ("Testcase 8: should not fetch campaigns");              
                MongoClient.connect(dbUrl, function(err, db){
                    assert.equal(null, err);
                    //fetch all from Campaign Details
                    var collection = db.get('campdetcollection');
                    var campid = "RA8";

                    getCamp([collection, campid], function(error, result){
                        expect(result).toEqual('returned_all_campaigns');
                    });

                    logger.trace ("End of Testcase 8: ");                    
                                   
                });
        }); 

    it("Negative test case for Vin Id", function(){
            logger.trace ("Testcase 9: should not fetch Vin Details");              
                MongoClient.connect(dbUrl, function(err, db){
                    assert.equal(null, err);
                    //fetch all from Campaign Details
                    var collection = db.get('vindetscollection');
                    var vinid = "CAMPAIGNDOBK00023";

                    getVin([collection, vinid], function(error, result){
                        expect(result).toEqual('returned_all_campaigns');
                    });

                    logger.trace ("End of Testcase 9: ");                    
                                   
                });
        });       

});