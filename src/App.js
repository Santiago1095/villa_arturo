import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./componentes/Headers";
import Carousels from "./componentes/Carousels";
import Abouts from "./componentes/Abouts";
import TitlleOne from "./componentes/TitleOne";
import TitleTwo from "./componentes/TitleTwo";
import Data from "./componentes/Data";
import Ubicacion from "./componentes/Ubicacion";
import Contacto from "./componentes/Contacto";
import Whatsapp from "./componentes/Whatsapp";

export default function App() {
  return (
    <div class="container-fluid">
      <Whatsapp />
      <Headers />
      <TitlleOne />
      <Carousels />
      <TitleTwo />
      <Abouts />
      <Data />
      <Contacto />
    </div>
  );
}
