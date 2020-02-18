import React from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import logo from '../public/vwizlogodark.png';

export default () => {
  return (
    <div>
      <Navbar bg="info"  variant="dark" expand="lg">
        <Navbar.Brand href="./home">
          <img src={logo} alt="Vocab Wizard" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./home" className="header-title">Home</Nav.Link>
            <NavDropdown title="Practice Resources" className="header-title" id="basic-nav-dropdown">
              <NavDropdown.Item href="./sentences">Sentences</NavDropdown.Item>
              <NavDropdown.Item href="./pictures">Pictures</NavDropdown.Item>
              <NavDropdown.Item href="./cards">Cards</NavDropdown.Item>
              <NavDropdown.Item href="./stories">Stories</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Crossword Puzzle</NavDropdown.Item>
              <NavDropdown.Item href="./otherGames">Other Games</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Word Lists" className="header-title" id="basic-nav-dropdown">
              <NavDropdown.Header className="header-grades">Elementary</NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./comingSoon">Kindergarden</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">First</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Second</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Third</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Fourth</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Fifth</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header className="header-grades">Middle and High</NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./comingSoon">Sixth</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Seventh</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Eighth</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Nineth</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Tenth</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Eleventh</NavDropdown.Item>
              <NavDropdown.Item href="./comingSoon">Twelfth</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Other Useful Links" className="header-title" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.dictionary.com/">Dictonary.com</NavDropdown.Item>
              <NavDropdown.Item href="https://www.thesaurus.com/">Thesaurus.com</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
;}