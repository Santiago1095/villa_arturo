import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Headers() {
  return (
    <>
      <Navbar
        className="bg-success-subtle py-2 font-monospace"
        expand="lg fixed-top  "
      >
        <Container className="bg-success-subtle py-1">
          <Navbar.Brand className="pe-5 " href="/">
            Villa Arturo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4">
              <Nav.Link className="btn btn-outline-light" href="/">
                Inicio
              </Nav.Link>
              <Nav.Link className="btn btn-outline-light" href="/planos">
                Planos Generales
              </Nav.Link>
              <Nav.Link className="btn btn-outline-light" href="/galeria">
                Galeria
              </Nav.Link>
              <Nav.Link className="btn btn-outline-light" href="/videos">
                Videos
              </Nav.Link>
              <Nav.Link className="btn btn-outline-light" href="/diseño">
                Diseño Libre
              </Nav.Link>
              <Nav.Link className="btn btn-outline-light" href="/opiniones">
                Opiniones
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
