import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Headers() {
  return (
    <div>
      <Navbar expand="lg fixed-top py-2 bg-success-subtle">
        <Container className="bg-success-subtle py-1">
          <Navbar.Brand className="pe-5" href="/home">Villa Arturo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/home/lotes">Lotes Disponibles</Nav.Link>
              <Nav.Link href="/home/fotografias">Galeria</Nav.Link>
              <Nav.Link href="/home/testimonios">Testimonios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1
        style={{
          height: 50,
          text: "center",
        }}
      ></h1>
    </div>
  );
}
