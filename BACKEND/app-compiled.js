"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//const express = require('express');
var app = (0, _express["default"])();
//const cors = require('cors');

var articleRouter = require("./routes/articles.route");
var categorieRouter = require("./routes/categories.route");
var db = require('./models');
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use('/api/articles', articleRouter);
app.use('/api/categorie', categorieRouter);

//static images folder

app.use('/public', _express["default"]["static"]('public'));

//app.use('/public2', express.static('public2'));

var port = process.env.NODE_ENV === 'production' ? process.env.PORT || 80 : 3003;
app.listen(port, function () {
  return console.log('Server listening on port ' + port);
});
