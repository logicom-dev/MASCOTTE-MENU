const db = require('../models')

const createCommande = async (req, res) => {
    const com_data = req.body;
    try {

        const cat = await db.sequelize.query(`INSERT INTO commande (com_data) VALUES ("{
            "email": "logicom.team@gmail.com",
            "nom": "aa",
            "numch": "52658044",
            "numtel": "1414",
            "note": "zzee",
            "cartItem": [
                {
                    "prix1": 25,
                    "LibArt": "POULET ROTI",
                    "Descrip": "",
                    "image_web": "NAHR/article.jpg",
                    "CodeArt": "34004",
                    "cartQuantity": 1
                },
                        {
                    "prix1": 25,
                    "LibArt": "POULET ROTI",
                    "Descrip": "",
                    "image_web": "NAHR/article.jpg",
                    "CodeArt": "34004",
                    "cartQuantity": 1
                }
            ],
            "prixttc": 25
        }")`);
        //console.log(cat);
        //console.log("category added successfully !!");
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


module.exports = { createCommande }
