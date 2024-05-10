import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Headers() {
  return (
    <>
      <Navbar expand="lg fixed-top py-2 bg-success-subtle">
        <Container className="bg-success-subtle py-1">
          <Navbar.Brand className="pe-5" href="/">
            Villa Arturo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/planos">Planos Generales</Nav.Link>
              <Nav.Link href="/galeria">Galeria</Nav.Link>
              <Nav.Link href="/testimonios">Testimonios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
