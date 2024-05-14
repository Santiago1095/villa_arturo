import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img33 from "../assets/img33.jpg";

export default function Data() {
  return (
    <Container fluid className="py-2 font-monospace">
      <Row>
        <Col sm={6} className="py-1">
          <Image src={img33} thumbnail />
        </Col>

        <Col sm={6}>
          <h1>Villa Arturo Cuenta Con</h1>

          <ul>
            <li>120 Lotes Campestres</li>
            <li>Vías internas proyectadas en Cintas de Concreto</li>
            <li>Andenes en Terreno Natural</li>
            <li>
              Redes de servicios públicos: Agua, Luz, Gas y Alcantarillado
            </li>
          </ul>

          <h3>Obras Comunes</h3>
          <p>Zona de Portería y Oficina de Administración Shut de Basuras</p>

          <h3>Zona Social </h3>

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
