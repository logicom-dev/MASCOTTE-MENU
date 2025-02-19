const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser')
const articleRouter = require("./routes/articles.route")
const categorieRouter = require("./routes/categories.route")
const postCommande = require("./routes/commande.route")
const adminRouter = require("./routes/admins.route")
app.use(express.json());
app.use(cors());
app.use('/api/articles', articleRouter);
app.use('/api/categorie', categorieRouter);
app.use(bodyparser.json())
app.use('/api/login', adminRouter);
app.use('/api/postCommande', postCommande);
//static images folder
app.use('/public', express.static('public'));
// start server
// const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server listening on port ' + port));
