import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';
import imgr5 from "../assets/imgr5.jpg";
import img8 from "../assets/img8.jpg";
import img2 from "../assets/img2.jpg";
import img24 from "../assets/img24.jpg";

export default function Carousels() {
  return (
    <Container fluid="md">
      <Carousel>
        <Carousel.Item interval={2500}>
          <img src={imgr5} alt="" className="d-block w-100 " />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={img8} alt="" className="d-block w-100" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={img2} alt="" className="d-block w-100" />
          <Carousel.Caption d-none></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={img24} alt="" className="d-block w-100" />
          <Carousel.Caption d-none></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
