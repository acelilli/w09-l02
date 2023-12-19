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
import MyAlert from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav brand="Bookshop" claim="Week 09 Lesson 02" />
      <Welcome />
      {/* <AllTheBooks/> */}
      <MyFooter
        content1={
          <ul>
            <li>Testo col 1</li>
            <li>Testo col 1</li>
            <li>Testo col 1</li>
          </ul>
        }
        content2={
          <ul>
            <li>Testo col 2</li>
            <li>Testo col 2</li>
            <li>Testo col 2</li>
          </ul>
        }
        content3={
          <ul>
            <li>Testo col 3</li>
            <li>Testo col 3</li>
            <li>Testo col 3</li>
          </ul>
        }
      />
    </div>
  );
}

export default App;
