const mong = require('mongodb'); 

// create a collection
const mongoClient = mong.MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db){
	if (err)
		throw err;
	var dbo = db.db("mydb");
	dbo.createCollection("customers", function(err, res){
		if (err)
				throw err;
		console.log("Collected Created!");
		db.close();
	});
});


