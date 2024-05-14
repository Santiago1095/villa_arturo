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

import Whatsapp from "./componentes/Whatsapp";

import Home from "./componentes/Home";
import Planos from "./componentes/comp-headers/Planos";

import Galeria from "./componentes/comp-headers/Galeria";
import Headers from "./componentes/Headers";
import Opiniones from "./componentes/comp-headers/Opiniones";
import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";
import Ubicacion from "./componentes/Ubicacion";
import Diseño from "./componentes/comp-headers/Diseño";

export default function App() {
  return (
    <BrowserRouter>
      <Headers />

      <Whatsapp />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/planos" element={<Planos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/diseño" element={<Diseño />} />
        <Route path="/opiniones" element={<Opiniones />} />
      </Routes>
      <Contacto />
      <Footer />
    </BrowserRouter>
  );
}
