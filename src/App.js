import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./componentes/Headers";
import Carousels from "./componentes/Carousels";
import Abouts from "./componentes/Abouts";
import TitleOne from "./componentes/TitleOne";
import TitleTwo from "./componentes/TitleTwo";
import Data from "./componentes/Data";
import Ubicacion from "./componentes/Ubicacion";
import Contacto from "./componentes/Contacto";
import Whatsapp from "./componentes/Whatsapp";
import Footer from "./componentes/Footer";
import Home from "./componentes/Home";
import Lotes from "./componentes/comp headers/Lotes";
import Fotografias from "./componentes/comp headers/Fotografias";
import Testimonios from "./componentes/comp headers/Testimonios";

export default function App() {
  return (
    <BrowserRouter>
      <Whatsapp />
      <Headers />
      

      <Routes>
        <>
          <Route path="/home" element={<Home />} />

          <Route path="/home/lotes" element={<Lotes />} />
          <Route path="/home/fotografias" element={<Fotografias />} />
          <Route path="/home/testimonios" element={<Testimonios />} />
        </>
      </Routes>
     
    </BrowserRouter>
  );
}
