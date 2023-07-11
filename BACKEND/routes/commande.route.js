const express= require('express');
const router = express.Router();
const {createCommande} =require('../controllers/commande');


router.post('/' , createCommande );

module.exports = router;