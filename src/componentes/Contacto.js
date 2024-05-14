import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ratio from "react-bootstrap/Ratio";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6tthuut", "template_3xjuxr8", form.current, {
        publicKey: "k1dxPHx9lbkikAHa1",
      })
      .then(
        () => {
          alert("Mensaje enviado, muy pronto nos comunicaremos contigo.");

          console.log("Enviado!");
        },
        (error) => {
          console.log("No se envio...", error.text);
        }
      );
  };
  return (
    <div className="border border-success font-monospace border-3 g-1 py-5 p-5">
      
      <Container fluid>
        <h2 className="text-center">Contacto</h2>
        <h4 className="text-center">Conéctate con nosotros</h4>
        <form ref={form} onSubmit={sendEmail}>
          <Row>
            <Col sm={4} className="py-2">
              <label className="m-3">Escribe tu nombre </label>
              <input type="text" required name="user_name" />
            </Col>
            <Col sm={4} className="py-2">
              <label className="m-3">Escribe tu Email</label>
              <input type="email" required name="user_email" />
            </Col>
            <Col sm={4} className="py-2">
              <label className="m-3">Escribe tu celular</label>
              <input type="number" required name="user_phone" />
            </Col>
          </Row>
          <Row>
            <label className="p-2">Escribe tu comentario</label>
            <textarea name="message" required />
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
