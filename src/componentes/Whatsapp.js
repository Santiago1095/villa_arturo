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
      <a href="https://wa.link/olzdv2" className="text-white">
        <SiWhatsapp
          className="bg-success  py-2"
          style={{
            width: "auto",
            height: "auto",
            justifyContent: "center",
            borderRadius: 50,
            padding: 7,
          }}
        />
      </a>
    </Button>
  );
}
