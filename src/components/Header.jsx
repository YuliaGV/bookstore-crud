import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';
import logo from '../img/logo.png';


const Header = () => {
  return (
    <header>
      <Navbar style={{ backgroundColor: '#E2BF7E' }}>
        <Container>
          <Navbar.Brand href="/" style={{ paddingTop: '0px' }}>
            <img
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Lista</Nav.Link>
              <Nav.Link href="/add">Añadir libro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;