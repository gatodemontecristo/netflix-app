import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../styles/styles.scss";
import { useContext } from "react";
import { AuthContext } from "../../auth/context";

function NavaBar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

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
              <NavLink className="menuItem" to="/movies" replace>
                Movies
              </NavLink>
              <NavLink className="menuItem" to="/series" replace>
                Series
              </NavLink>
              <NavLink className="menuItem" to="/movies">
                Popular News
              </NavLink>
              <InputGroup className="myPrincipalPhone">
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
              <p className="myPrincipalPhone">
                <i className="bi bi-bell myIconBell"></i>
              </p>
              <button
                type="button"
                className="btn btn-dark mySearchLogOut myPrincipalPhone"
                onClick={onLogout}
              ></button>
            </Nav>
          </Navbar.Collapse>
          <div className="menuData">
            <InputGroup className="mySearchSection myPrincipalDeskop">
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

            <p>{user.name}</p>
            <p className="myPrincipalDeskop">
              <i className="bi bi-bell myIconBell"></i>
            </p>
            <button
              type="button"
              className="myPrincipalDeskop btn btn-dark mySearchLogOut "
              onClick={onLogout}
            >
              <i className="bi bi-door-open-fill"></i>
            </button>
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
