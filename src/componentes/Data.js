import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imgr6 from "../assets/imgr6.jpg";

export default function Data() {
  return (
    <Container fluid className="py-2 font-monospace">
      <Row>
        <Col sm={6} className="py-1">
          <Image src={imgr6} thumbnail />
        </Col>

        <Col sm={6}>
          <h1>Villa Arturo Cuenta Con</h1>

          <ul>
            <li>120 Lotes campestres</li>
            <li>Vías internas proyectadas en cintas de concreto</li>
            <li>Andenes en terreno natural</li>
            <li>
              Redes de servicios públicos: agua, luz, gas y alcantarillado
            </li>
          </ul>

          <h3>Obras Comunes</h3>
          <p>Zona de portería, shut de basuras y oficina de administración</p>

          <h3>Zonas Sociales </h3>

          <ul>
            <li>Piscina para adultos y niños</li>
            <li>Duchas exteriores</li>
            <li>Modulo de baños y vestidores</li>
            <li>Cancha multiproposito</li>
            <li>Kiosko o caney sociales</li>
            <li>Paque infantil</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
