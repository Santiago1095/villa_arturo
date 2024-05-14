import ImageGalery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";
import img21 from "../../assets/img21.jpg";
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";
import img25 from "../../assets/img25.jpg";
import img26 from "../../assets/img26.jpg";
import img27 from "../../assets/img27.jpg";
import img28 from "../../assets/img28.jpg";
import img29 from "../../assets/img29.jpg";
import img30 from "../../assets/img30.jpg";
import img31 from "../../assets/img31.jpg";
import img32 from "../../assets/img32.jpg";
import img33 from "../../assets/img33.jpg";
import img34 from "../../assets/img34.jpg";
import img35 from "../../assets/img35.jpg";
import img36 from "../../assets/img36.jpg";





export default function Galeria() {
  const images = [
    { original: img1, thumbnail: img1 },
    { original: img2, thumbnail: img2 },
    { original: img3, thumbnail: img3 },
    { original: img4, thumbnail: img4 },
    { original: img5, thumbnail: img5 },
    { original: img6, thumbnail: img6 },
    { original: img7, thumbnail: img7 },
    { original: img8, thumbnail: img8 },
    { original: img9, thumbnail: img9 },
    { original: img10, thumbnail: img10 },
    { original: img11, thumbnail: img11 },
    { original: img12, thumbnail: img12 },
    { original: img13, thumbnail: img13 },
    { original: img14, thumbnail: img14 },
    { original: img15, thumbnail: img15 },
    { original: img16, thumbnail: img16 },
    { original: img17, thumbnail: img17 },
    { original: img18, thumbnail: img18 },
    { original: img19, thumbnail: img19 },
    { original: img20, thumbnail: img20 },
    { original: img21, thumbnail: img21 },
    { original: img22, thumbnail: img22 },
    { original: img23, thumbnail: img23 },
    { original: img24, thumbnail: img24 },
    { original: img25, thumbnail: img25 },
    { original: img26, thumbnail: img26 },
    { original: img27, thumbnail: img27 },
    { original: img28, thumbnail: img28 },
    { original: img29, thumbnail: img29 },
    { original: img30, thumbnail: img30 },
    { original: img31, thumbnail: img31 },
    { original: img32, thumbnail: img32 },
    { original: img33, thumbnail: img33 },
    { original: img34, thumbnail: img34 },
    { original: img35, thumbnail: img35 },
    { original: img36, thumbnail: img36 },
    
  ];

  return (
    <div>
      <h1 className="text-center bg-light font-monospace bg-gradient p-3 text-dark mt-5 pt-5">
        GALERIA
      </h1>
      <div style={{ width: "70vw", margin: "auto" }}>
        <ImageGalery items={images} 
        showBullets={true}
        
        
        />
      </div>
    </div>
  );
}
