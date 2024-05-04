import { SiWhatsapp } from "react-icons/si";
import Button from "react-bootstrap/Button";


export default function Whatsapp() {
  return (
    <Button
      variant="outline-light"
      className="border border-0 py-1"
      style={{
        position: "fixed",
        bottom: 25,
        right: 10,
        zIndex: 999,
        zoom: 1.5,
        borderRadius: 50,
        padding: 6,
      }}
    >
      <SiWhatsapp
        className="bg-success border border-dark py-2"
        style={{
          width: "auto",
          height: "auto",
          justifyContent: "center",
          borderRadius: 50,
          padding: 7,
        }}
      />
    </Button>

    
  );
}
