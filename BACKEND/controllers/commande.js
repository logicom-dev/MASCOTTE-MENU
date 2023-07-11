const db = require('../models');

const createCommande = async (req, res) => {
  const com_data = req.body;
  try {
    const cat = await db.sequelize.query(
      `INSERT INTO commande (com_data) VALUES (:comData)`,
      {
        replacements: {
          comData: JSON.stringify(com_data),
        },
      }
    );
    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCommande = async (req, res) => {
    try {
        const commande = await db.sequelize.query(`SELECT * FROM commande`);
        res.status(200).json(commande);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


module.exports = { createCommande , getCommande };
