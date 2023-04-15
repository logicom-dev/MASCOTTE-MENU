const express = require('express');
const cors = require('cors');
require("dotenv").config();

const serverless = require('serverless-http');

const app = express();

const router = express.Router()

//routes
const articleRouter = require("../routes/articles.route")
const categorieRouter = require("../routes/categories.route");

//BodyParser Middleware
app.use(express.json());
//CORS Middleware
app.use(cors());

// Utiliser les routes
app.use('/api/articles', articleRouter);

app.use('/api/categorie', categorieRouter);


app.use('/api/server', router);
module.exports = app;
module.exports.handler = serverless(app);
