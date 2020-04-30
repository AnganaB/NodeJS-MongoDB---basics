const mong = require('mongodb'); 

// create a database
const mongoClient = mong.MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, function (err, db) {
	if (err)
		throw err;
	console.log("Database Created!");
	db.close();
});

//  In MongoDB, database is not created until it gets content

