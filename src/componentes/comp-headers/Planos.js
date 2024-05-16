import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

import img37 from "../../assets/img37.jpg";

export default function Planos() {
  return (
    <div>
      <h1 className="text-center bg-light bg-gradient font-monospace p-3 text-dark mt-5 pt-5">
        PLANOS GENERALES
      </h1>
      <TransformWrapper
        defaultScale={4}
        defaultPositionX={800}
        defaultPositionY={200}
      >
        <TransformComponent>
          <img src={img37} alt="" className="d-block w-100" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
