import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import img37 from "../../assets/img37.jpg";
import { Button } from "react-bootstrap";

export default function Planos() {
  return (
    <div>
      <h1 className="text-center bg-light bg-gradient font-monospace p-3 text-dark mt-5 pt-5">
        PLANOS GENERALES
      </h1>
      <TransformWrapper
        defaultScale={4}
        defaultPositionX={800}
        defaultPositionY={800}
      >
        <TransformComponent>
          <img src={img37} alt="" className="d-block w-100" />
        </TransformComponent>
      </TransformWrapper>

      <Button variant="success"

      href="javascript:location.reload()"
        style={{
          position: "fixed",
          bottom: 120,
          right: 15,
          zIndex: 999,
          zoom: 1,
        }}
      >
        Volver
      </Button>
    </div>
  );
}
