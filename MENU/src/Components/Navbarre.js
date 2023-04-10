
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from "react-router-dom"
export default function Navbarre() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">La Mascotte</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/Articlesearch" >Recherche par Article</Nav.Link>
          <Nav.Link as={Link} to="/Categoriesearch" >Recherche par Categorie</Nav.Link>
           


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
//C:\Users\ASUS\Desktop\gestcom2\ImageResto\img-lagora\burger.jpg
//ImageResto\img-lagora\burger.jpg
