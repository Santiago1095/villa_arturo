import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Diseño() {
  return (
    <div className="container-fluid py-5 font-monospace">
      <h1 className="text-center bg-light bg-gradient font-monospace p-3 text-dark mt-5 pt-5">
        Diseños Libres
      </h1>

    <p>En Colombia, las casas modernas están en tendencia debido a su estética contemporánea y funcionalidad. Los compradores de condominios buscan diseños innovadores y espacios adaptados a su estilo de vida. En villa Aruto contamos con lotes de hasta 500m2 donde se podran construir casas modernas que cumplen con estas demandas y se destacan en el mercado inmobiliario actual.</p>
<br />
<p>Al elegir construir en Villa Arturo, obtendrás un espacio adecuado para esa casa moderna, personalizada y de alta calidad, construida por profesionales comprometidos con tu satisfacción. Confía en nuestra experiencia y dedicación para hacer realidad el hogar de tus sueños.</p>

      <Container>
        <Row>
          <Col>Tendencias en Colombia: Casas modernas </Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
      </Container>
    </div>
  );
}
