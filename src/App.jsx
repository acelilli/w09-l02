import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
//import specifico da un import globale => condensato linee sotto in quella sopra
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
//NB: se volessi creare la navbar attraverso un component NON posso chimarla Navbar a causa del conflitto con boostrap

function App() {
  return (
    <div className="App">
      <MyNav brand="Esercizio" claim="Week 09 Lesson 02" />
    </div>
  );
}

export default App;
