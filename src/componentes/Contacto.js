import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ratio from "react-bootstrap/Ratio";

export default function Contacto() {
  const form = useRef();

  const [alertMsg, setAlertMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6tthuut", "template_3xjuxr8", form.current, {
        publicKey: "k1dxPHx9lbkikAHa1",
      })
      .then(() => {
        setAlertMsg("success");
      })
      .catch(() => {
        setAlertMsg("failed");
      });
  };
  return (
    <div className="border border-success font-monospace border-3 g-1 py-5 p-5">
      <Container fluid>
        <h2 className="text-center">Contacto</h2>
        <h4 className="text-center">Conéctate con nosotros</h4>
        {alertMsg != "" && (
          <Alert variant={alertMsg === "success" ? "success" : "danger"}>
            {alertMsg === "success"
              ? "Tu mensaje ha sido enviado"
              : "Error: Tu mensaje no se ha enviado"}
          </Alert>
        )}
        <form ref={form} onSubmit={sendEmail}>
          <Row>
            <Col sm={4} className="py-2">
              <div className="d-flex flex-column">
                <label className="">Escribe tu nombre </label>
                <input
                  type="text"
                  required
                  placeholder="Santiago Montañez"
                  name="user_name"
                />
              </div>
            </Col>

            <Col sm={4} className="py-2">
              <div className="d-flex flex-column">
                <label className="">Escribe tu Email</label>
                <input
                  type="email"
                  required
                  placeholder="santiago@gmail.com"
                  name="user_email"
                />
              </div>
            </Col>

            <Col sm={4} className="py-2">
              <div className="d-flex flex-column">
                <label className="">Escribe tu celular</label>
                <input
                  type="number"
                  required
                  placeholder="3102334567"
                  name="user_phone"
                  style={{}}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="py-2">
              <div className="d-flex flex-column">
                <label>Escribe tu comentario</label>
                <textarea
                  name="message"
                  placeholder="Hola, quiero mas informacion..."
                  required
                />
              </div>
            </Col>
          </Row>
          <div className="text-center py-4">
            <input
              className="bg-success border border-success rounded py-2 text-white"
              type="submit"
              required
              value="Enviar"
            />
          </div>
        </form>
      </Container>

      <div style={{ width: "auto", height: "auto" }} className="py-2">
        <Ratio aspectRatio="21x9">
          <embed
            className="border border-dark border-2"
            title="map"
            type="image/svg+xml"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3139.932827943921!2d-72.369625!3d5.299308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMTcnNTcuNSJOIDcywrAyMicxMC43Ilc!5e1!3m2!1ses-419!2sco!4v1713597139838!5m2!1ses-419!2sco"
          />
        </Ratio>
      </div>
    </div>
  );
}
