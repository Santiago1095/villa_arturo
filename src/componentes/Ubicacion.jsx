import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img20 from "../assets/img20.jpg";

export default function Ubicacion() {
  return (
    <Container fluid>
      <Row>
        <Col sm={6}>
          <h1>Ubicacion</h1>
          <h2>- Via principal vereda Picon</h2>
          <h2>- Aproximadamente a 3 km de Yopal</h2>
          <h2>- Vias de acceso pavimentadas</h2>
        </Col>

        <Col sm={6}>
          <Image src={img20} />
        </Col>
      </Row>
    </Container>
  );
}
