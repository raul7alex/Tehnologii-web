var mysql = require('mysql');

const express = require('express');
const app = express();
const port = 8080;
app.use(function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/MySQL', function(req, resp) {

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "MySQL"
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Test", function(err, result, fields) {
      if (err) throw err;
      resp.send(result);
    });
  });

});