import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img28 from "../assets/img28.jpg";

export default function Data() {
  return (
    <Container fluid className="py-4">
      <Row>
        <Col sm={5}>
          <Image src={img28} thumbnail />
        </Col>

        <Col sm={7}>
          <h1>Planos Generales</h1>

          <ul>
            <li>180 Lotes Campestres</li>
            <li>Vías internas proyectadas en Cintas de Concreto</li>
            <li>Andenes en Terreno Natural</li>
            <li>Redes de servicios públicos: Luz, Agua y Alcantarillado</li>
          </ul>

          <h3>Obras Comunes</h3>
          <p>Zona de Portería y Oficina de Administración Shut de Basuras</p>

          <h3>Obras Compromiso Etapa 1: Zona Social 1</h3>

          <ul>
            <li>Piscina para adultos y niños</li>
            <li>Duchas exteriores</li>
            <li>Modulo de baños y vestidores</li>
            <li>Cancha de tenis</li>
            <li>Cancha multiproposito</li>
            <li>Kiosko o caney sociales</li>
            <li>Paque infantil</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
