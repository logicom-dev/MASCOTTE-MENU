import React from 'react'
import { useState, useEffect } from 'react';
import { CategorieService } from '../../Services/Categories-service';
import { ArticleService } from '../../Services/Article-Service';
import { ToastContainer, toast } from 'react-toastify';

import Categories from './Categories';

import Menu from './Menu';

import logo from "./MascotteLogo.png";
//import SearchBarSection from '../SearchBarSection';
const Categorie = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
    GetListArticles();

    },[]); 
    
    const GetListArticles=async()=>{
    await ArticleService.fetchArticles()
    .then((res) => {
    setArticles(res.data);
    });
    }

    const[categorie,setcategorie] = useState([]);
    useEffect(() => {

        const GetCategorie=async()=>{
            CategorieService.fetchCategorie()
            .then((res) => {
              setcategorie(res.data);
        });
        }    
    GetCategorie();
  },[]);


  



    const allCategories = [...new Set(categorie.map((item) => item.CodeCat))];
    


    


    const [menuItems, setMenuItems] = useState(articles);
    const [activeCategory, setActiveCategory] = useState("");
    

    

    
  
    const filterItems = (category) => {
      setActiveCategory(category);
      if (category === "all") {
        setMenuItems(articles);
        return;
      }
      const newItems = articles.filter((item) => item.CodeCat === Number(category));
      setMenuItems(newItems);
    };


  

  return (
    <div>
        <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
         
          <div className="underline"></div>
        </div>
        <Categories
          categories={allCategories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
        <ToastContainer />
        
 
       
      </section>
    </main>
      
    </div>
  );
};

export default Categorie
