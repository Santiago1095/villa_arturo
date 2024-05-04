import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Ratio from "react-bootstrap/Ratio";

export default function Contacto() {
  return (
    <div className="border border-success border-3 g-1 py-5 p-5">
      <Container fluid>
        <h2 className="text-center">Contacto</h2>
        <h4 className="text-center">Conéctate con nosotros</h4>

        <Form>
          <Row>
            <Col sm={4} className="py-4">
              <Form.Control placeholder="Escribe tu nombre completo" required />
            </Col>
            <Col sm={4} className="py-4">
              <Form.Control
                placeholder="Escribe tu correo electronico"
                required
              />
            </Col>
            <Col sm={4} className="py-4">
              <Form.Control
                placeholder="Escribe tu numero de telefono"
                required
              />
            </Col>
          </Row>

          <Row>
            <Form.Control
              as="textarea"
              placeholder="Escribe un comentario"
              required
            />
          </Row>

          <div className="text-center py-4">
            <Button type="submit" variant="success">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>

      <div style={{ width: "auto", height: "auto" }} className="py-2">
        <Ratio aspectRatio="21x9">
          <embed
            className="border border-dark border-2"
            title="map"
            type="image/svg+xml"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3139.932827943921!2d-72.369625!3d5.299308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMTcnNTcuNSJOIDcywrAyMicxMC43Ilc!5e1!3m2!1ses-419!2sco!4v1713597139838!5m2!1ses-419!2sco"
          />
        </Ratio>
      </div>

    
    </div>
  );
}
