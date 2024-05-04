import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, } from 'react-router-dom';

export default function Footer() {
  return (
    <Container fluid className="py-5 bg-success-subtle">
      <p className="text-center"> Condominio Villa Arturo Todos Los Derechos Reservados.</p>
      <div className="text-center ">
        <Button
          className=" btn-outline-light bg-success border border-success  btn-outline-light"
          style={{ margin: 10 }}
        >
          {" "}
          <FaFacebook style={{ width: 30, height: "auto" }} />{" "}
        </Button>
        <Button
          className="btn-outline-light bg-success border border-success  btn-outline-light"
          style={{ margin: 10 }}
        >
          <FaYoutube style={{ width: 30, height: "auto" }} />
        </Button>
        <Button
          className="btn-outline-light bg-success border border-success  btn-outline-light"
          style={{ margin: 10 }}
        >
          <FaInstagram style={{ width: 30, height: "auto" }} />
        </Button>
      </div>

     
    </Container>
  );
}
