import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../styles/styles.css";

function NavaBar() {
  return (
    <>
      <Navbar expand="lg" className="menuBarra">
        <Container className="menuContenedor">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="menuLogo">
            <img className="menuLogoImg" src="../netflix_logo.png" alt="" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="menuItem" to="/movies">
                Movies
              </NavLink>
              <NavLink className="menuItem" to="/movies">
                Series
              </NavLink>
              <NavLink className="menuItem" to="/movies">
                Popular News
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="menuData">

            <InputGroup className="mySearchSection">
              <InputGroup.Text id="basic-addon1" className="mySearchButton">
                <i className="bi bi-search myIconSearch"></i>
              </InputGroup.Text>
              <Form.Control
              className="mySearchInput"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <p>Erick Dejo</p>
            <p>
              <i className="bi bi-bell myIconBell"></i>
            </p>
            <div className="menuAvatar">
              <img className="menuAvatarImg" src="../avatar.png" alt="" />
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default NavaBar;
