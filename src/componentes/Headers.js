import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Headers() {
  return (
    <Navbar expand="lg" >
      <Container className="bg-body-tertiary bg-dark ">
        <Navbar.Brand href="#home">Villa Arturo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#ventas">Ventas</Nav.Link>
            <Nav.Link href="#pago">Formas De Pago</Nav.Link>
            <Nav.Link href="#experiencias">Experiencias</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
