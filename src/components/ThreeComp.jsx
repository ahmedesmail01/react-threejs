import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "./Three";

const ThreeComp = () => {
  let rendererConfig;

  try {
    // Test WebGLRenderer creation
    const renderer = new WebGLRenderer();
    renderer.dispose(); // Dispose immediately since we only test creation
    rendererConfig = {}; // Default WebGLRenderer config
  } catch (e) {
    console.warn(
      "WebGL not supported, falling back to CanvasRenderer or software rendering"
    );
    rendererConfig = { powerPreference: "low-power" }; // Fallback renderer config
  }

  return (
    <>
      <Canvas id="three-canvas-container" gl={rendererConfig}>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ThreeComp;
