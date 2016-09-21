
//This is for logging purpose
var log4js = require('log4js');
log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('app.log'), 'app');
var logger = log4js.getLogger('app');
logger.setLevel(log4js.levels.TRACE);


var traceLogger = function (message) {
        logger.trace('message');
    };

var errorLogger = function (message) {
        logger.trace(message);
    };

/*
 * Serve JSON to our AngularJS client
 */

//GET Vindetails from DB
exports.allVinDetails = function(req, res){
logger.trace("in the api");
logger.trace(req.db);
var db = req.db;
logger.trace (db);
var collection = db.get("vindetscollection");
logger.trace (collection);       
 collection.find({}, function(e,docs){
  req.json({allVinDetails : docs});
 	/*res.json({
    allVinDetails: docs
  });*/
 });
};

//GET Campdetails from DB
exports.allCampDetails = function(req, res){
logger.trace("in the api");
var db = req.db;
logger.trace (db);
var collection = db.get("campdetcollection");
logger.trace (collection);       
 collection.find({}, function(e,docs){
  req.json({allCampDetails : docs});
  /*res.json({
    allCampDetails: docs
  });*/
 });
};