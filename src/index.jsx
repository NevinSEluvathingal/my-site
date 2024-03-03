import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas
      camera={{
        fov: 65,
        near: 0.1,
        far: 1000,
        position: [1, 1, 10],
      }}
       style={{ pointerEvents: "fill" }}      // Set pointer events to none for the canvas
    >
      <Scene />
    </Canvas>
  </>
);
