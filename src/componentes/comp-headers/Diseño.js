import ImageGalery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import imgc1 from "../../assets/imgc1.jpg";
import imgc2 from "../../assets/imgc2.jpg";
import imgc3 from "../../assets/imgc3.jpg";
import imgc4 from "../../assets/imgc4.jpg";
import imgc5 from "../../assets/imgc5.jpg";

export default function Diseño() {
  const images = [
    { original: imgc1, thumbnail: imgc1 },
    { original: imgc2, thumbnail: imgc2 },
    { original: imgc3, thumbnail: imgc3 },
    { original: imgc4, thumbnail: imgc4 },
    { original: imgc5, thumbnail: imgc5 },
  ];

  return (
    <div className="container-fluid py-3 font-monospace">
      <h1 className="text-center bg-light bg-gradient font-monospace p-3 text-dark mt-5 pt-5">
        DISEÑO LIBRE
      </h1>

      <p>
        En Colombia, las casas modernas están en tendencia debido a su estética
        contemporánea y funcionalidad. Los compradores de condominios buscan
        diseños innovadores y espacios adaptados a su estilo de vida.{" "}
        <strong>En Villa Arturo contamos con lotes de hasta 500m2, </strong>{" "}
        donde se podrán construir casas modernas de{" "}
        <strong>libre elección </strong> por su propietario en cuanto a su
        diseño y planos estructurales.
      </p>
      <br />
      <p>
        Al elegir condominios campestres Villa Arturo, obtendrás un espacio
        adecuado para realizar la construcción de esta casa personalizada, de
        alta calidad y contaras con espacios sociales y de recreación para tu
        día a día, confía en nuestra experiencia y dedicación para hacer
        realidad el hogar de tus sueños.
      </p>

      <div style={{ width: "70vw", margin: "auto" }}>
        <ImageGalery items={images} showBullets={true} />
      </div>
    </div>
  );
}
