import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <img
            src="/assets/logos/music.svg"
            className="d-inline-block align-top "
            alt="Apple music logo"

          />
        </Navbar.Brand>
        <Link to="accedi">
        <div  className="text-danger fw-bolder nav-link text-decoration-none">Accedi</div>
        </Link>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
