const { article } = require('../models');
const db = require("../models");
const Article = db.article;


const getArticles = async (req, res) => {
    try {
        const art = await db.sequelize.query(`select CodeArt, LibArt, Descrip, CodeCat, prix1, imagepath from article WHERE  visible_web = "1"`);

        res.status(200).json(art[0]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getArticleByID = async (req, res) => {
    const CodeArt = req.params.CodeArt;
    try {
        const cat = await db.sequelize.query(`SELECT * FROM mascotte.article WHERE CodeArt=${CodeArt}`);
        console.log(cat);
        res.status(200).json(cat[0]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const createArticle = async (req, res) => {
    const CodeCat = req.body.CodeCat;
    const Descrip = req.body.Descrip;
    const LibArt = req.body.LibArt;
    const prix1 = req.body.prix1;
    const CodeArt = req.body.CodeArt;
    const url = req.protocol + '://' + req.get('host')
    const imagepath = url + '/public//' + req.file.filename;

    try {

        const art = await db.sequelize.query(`INSERT INTO article (CodeCat, Descrip, LibArt, prix1, CodeArt, imagepath) VALUES ("${CodeCat}","${Descrip}","${LibArt}","${prix1}","${CodeArt}","${imagepath}")`);
        console.log(art);
        console.log("article added successfully !!");
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateArticle = async (req, res) => {

    const CodeArt = req.body.CodeArt;
    const CodeCat = req.body.CodeCat;
    const Descrip = req.body.Descrip;
    const LibArt = req.body.LibArt;
    const prix1 = req.body.prix1;
    const url = req.protocol + '://' + req.get('host')
    const imagepath = url + '/public/' + req.file.filename;

    try {

        const cat = await db.sequelize.query(`UPDATE mascotte.article SET Descrip ="${Descrip}", LibArt = "${LibArt}", prix1 ="${prix1}", CodeCat = "${CodeCat}", imagepath = "${imagepath}" WHERE  CodeArt = "${CodeArt}"`);
        console.log(cat)
        res.json({ message: "article updated successfully!" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const deleteArticle = async (req, res) => {
    const CodeArt = req.params.CodeArt;
    try {

        const cat = await db.sequelize.query(`UPDATE article SET visible_web ="0" WHERE  CodeArt = "${CodeArt}"`);
        console.log(cat)
        res.json({ message: "article deleted successfully!" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

const deleteArticle2 = async (req, res) => {
    const CodeArt = req.params.CodeArt;
    console.log(CodeArt);
    try {

        const cat = await db.sequelize.query(`DELETE FROM mascotte.article WHERE  CodeArt = "${CodeArt}"`);
        console.log(cat)
        res.json({ message: "article deleted successfully." });;
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
module.exports = {
    getArticles,
    getArticleByID,
    updateArticle,
    deleteArticle,
    createArticle,
    deleteArticle2
}
