import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Ubicacion() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_crr2fv6", "template_0gl336p", form.current, {
        publicKey: "dK865_ssEJETG-hOl",
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
    <div className="border border-success border-3 g-1 py-5 p-5">
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
    </div>
  );
}
