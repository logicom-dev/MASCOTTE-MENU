import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Navbarre from './Components/Navbarre';
import Categorie from "./Components/Categories/Categorie";
import Footer from "./Components/Footer";
import SearchBarSection from "./Components/SearchBarSection";
import CartArticle from "./Components/Articles/Cart";
function App() {
  return (
    <BrowserRouter>
      <Navbarre />
      <Routes>
        <Route path="/" element={<Navigate to="/Categoriesearch" /> }></Route>
        <Route path='/Articlesearch' element={<SearchBarSection />} />
        <Route path='/Categoriesearch' element={<Categorie />} />
        <Route path='/cart' element={<CartArticle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
