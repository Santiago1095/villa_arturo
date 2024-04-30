import { SiWhatsapp } from "react-icons/si";
import Button from "react-bootstrap/Button";

export default function Whatsapp() {
  return (
    <Button
      variant="outline-dark"
      className="bg-success border border-dark py-1"
      style={{
        position: "fixed",
        bottom: 25,
        right: 10,
        zIndex: 999,
        zoom: 2,
        borderRadius: 50,
        padding: 7,
      }}
    >
      <SiWhatsapp
        className="bg-success py-2"
        style={{
          width: "auto",
          height: "auto",
          justifyContent: "center",
        }}
      />
    </Button>
  );
}
