import Carousel from 'react-bootstrap/Carousel';
import img3 from '../assets/img3.jpg'
import img8 from '../assets/img8.jpg'
import img16 from '../assets/img16.jpg'

export default function Carousels(){
    return (
<div className="d-block w-100 py-4">
    
      <div row>

    <Carousel>
    <Carousel.Item interval={2500}>
    <img src={img3} alt="" className="d-block w-100"/>
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2500}>
    <img src={img8} alt="" className="d-block w-100"/>
      <Carousel.Caption>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2500}>
      <img src={img16} alt="" className="d-block w-100"/>
      <Carousel.Caption d-none>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </div>
  </div>
    )
};