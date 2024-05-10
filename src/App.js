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

import Testimonios from "./componentes/comp-headers/Testimonios";
import Galeria from "./componentes/comp-headers/Galeria";
import Headers from "./componentes/Headers";

export default function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Whatsapp />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/planos" element={<Planos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/testimonios" element={<Testimonios />} />
      </Routes>
    </BrowserRouter>
  );
}
