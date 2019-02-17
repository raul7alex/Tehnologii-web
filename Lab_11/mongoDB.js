var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

const express = require('express');
const app = express();
const port = 8080;
app.use(function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/MongoDB', function(req, resp) {
  MongoClient.connect(url, {
    useNewUrlParser: true
  }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("MongoDB");
    dbo.collection("MongoDB").find().toArray(function(err, result) {
      if (err) throw err;
      resp.send(result);
      db.close();
    });
  });
});

app.get('/MongoDB/id', function(req, resp) {
  MongoClient.connect(url, {
    useNewUrlParser: true
  }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("MongoDB");
    dbo.collection("MongoDB").find({}, {
      projection: {
        _id: 1
      }
    }).toArray(function(err, result) {
      if (err) throw err;
      resp.send(result);
      db.close();
    });
  });
});