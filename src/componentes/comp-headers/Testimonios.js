import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img16 from "../../assets/img16.jpg";

export default function Testimonios() {
  return (
    <div>
      <h1 className="text-center bg-light bg-gradient p-3 text-dark mt-5 pt-5">
        TESTIMONIOS
      </h1>

      <Carousel fade>
        <Carousel.Item interval={25000}>
          <img src={img7} alt="" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Pepito Perez</h3>
            <p className="text-white bg-dark bg-opacity-25">
              La verdad estamos muy contentos. Yo creo que vinimos acá porque
              Dios nos guió. Porque nosotros buscamos en varios lugares; fuimos
              a ver varios condominios en otras zonas
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={img7} alt="" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Santiago Montañez</h3>
            <p className="text-white bg-dark bg-opacity-25">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo
              a cupiditate, voluptatibus voluptates, dolores nam accusantium
              error, modi iure itaque totam labore.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={img7} alt="" className="d-block w-100" />
          <Carousel.Caption d-none>
            <h3>Jesika Maria</h3>
            <p className="text-white bg-dark bg-opacity-25">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo
              a cupiditate, voluptatibus voluptates, dolores nam accusantium
              error, modi iure itaque totam labore.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
