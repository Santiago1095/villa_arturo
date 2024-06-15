import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Container fluid className="py-5 bg-success-subtle">
      <p className="text-center">
        Condominio Villa Arturo Todos Los Derechos Reservados.
      </p>
      <div className="text-center">
        <Button variant="success" style={{ margin: 10 }}>
          <a href="https://www.facebook.com/profile.php?id=61559946830681" target="_blank" className="text-white">
            <FaFacebook style={{ width: 30, height: "auto" }} />
          </a>
        </Button>

        <Button variant="success" style={{ margin: 10 }}>
          <a href="https://www.youtube.com/channel/UCQd2id4-QCuBSzqgBrkpulg" target="_blank" className="text-white">
            <FaYoutube style={{ width: 30, height: "auto" }} />
          </a>
        </Button>

        <Button variant="success" style={{ margin: 10 }}>
          <a href="https://www.instagram.com/villa_arturo_yopal/" target="_blank" className="text-white">
            <FaInstagram style={{ width: 30, height: "auto" }} />
          </a>
        </Button>
      </div>
    </Container>
  );
}
