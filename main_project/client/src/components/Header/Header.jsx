import { Routes, Route, BrowserRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';
import './Header.css';

import MainPage from '../../pages/MainPage/MainPage';
import Users from '../../pages/Users';
import AddUser from "../../pages/RegUser";

const Header = () => {
  return (
    <>
      <Navbar fixed='top' bg="light" expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img 
              src={logo}
              height="45"
              width="45"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/users">Даннные о пользователях</Nav.Link>
              <Nav.Link href="/add_user">Добавить пользователя</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/add_user" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Header;
