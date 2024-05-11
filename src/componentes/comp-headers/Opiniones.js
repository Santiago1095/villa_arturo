import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import imgp1 from "../../assets/imgp1.jpg";
import imgp2 from "../../assets/imgp2.jpg";
import imgp3 from "../../assets/imgp3.jpg";
import imgp4 from "../../assets/imgp4.jpg";
import imgp5 from "../../assets/imgp5.jpg";
import imgp6 from "../../assets/imgp6.jpg";

export default function Opiniones() {
  return (
    <div>
      <Container fluid>
        <h1 className="text-center bg-light bg-gradient p-3 text-dark mt-5 pt-5">
          OPINIONES
        </h1>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={imgp1}  />
            <Card.Body>
              <Card.Title>Jesica Maria</Card.Title>
              <Card.Text>
                La verdad estamos muy contentos. Yo creo que vinimos acá porque
                Dios nos guió. Porque nosotros buscamos en varios lugares;
                fuimos a ver varios condominios en otras zonas
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgp2} />
            <Card.Body>
              <Card.Title>Santiago Montañez</Card.Title>
              <Card.Text>
              Recibí muy buena atención, buen manejo de las situaciones en cuanto a las distintas ideas de diseños. Mucha comprensión y tolerancia, buen trato, accesibilidad y capacidad para escuchar sugerencias.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgp3} />
            <Card.Body>
              <Card.Title>Pepito Perez</Card.Title>
              <Card.Text>
              Excelente en tiempo e interés para el proyecto y poder sacar adelante todo el sector.


              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src={imgp4} />
            <Card.Body>
              <Card.Title>Laurent Sofia</Card.Title>
              <Card.Text>
                La verdad estamos muy contentos. Yo creo que vinimos acá porque
                Dios nos guió. Porque nosotros buscamos en varios lugares;
                fuimos a ver varios condominios en otras zonas
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgp5} />
            <Card.Body>
              <Card.Title>Maddison Montañez</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur non earum repudiandae ipsa reprehenderit quaerat,
                quo a cupiditate, voluptatibus voluptates, dolores nam
                accusantium error, modi iure itaque totam labore.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgp6} />
            <Card.Body>
              <Card.Title>Carlos Arturo</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}
