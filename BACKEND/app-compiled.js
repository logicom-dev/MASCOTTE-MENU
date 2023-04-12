"use strict";

var express = require('express');
var app = express();
var cors = require('cors');
var articleRouter = require("./routes/articles.route");
var categorieRouter = require("./routes/categories.route");
var db = require('./models');
app.use(express.json());
app.use(cors());
app.use('/api/articles', articleRouter);
app.use('/api/categorie', categorieRouter);

//static images folder

app.use('/public', express["static"]('public'));

//app.use('/public2', express.static('public2'));

var port = process.env.NODE_ENV === 'production' ? process.env.PORT || 80 : 3003;
app.listen(port, function () {
  return console.log('Server listening on port ' + port);
});
