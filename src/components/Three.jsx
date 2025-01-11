import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const Three = () => {
  const orbitControlRef = useRef(null);

  // Controls rotation on mouse move
  useFrame((state) => {
    const { x, y } = state.mouse;
    if (orbitControlRef.current) {
      orbitControlRef.current.setAzimuthalAngle(-x * Math.PI); // Correct method name
      orbitControlRef.current.update();
    }
  });

  useEffect(() => {
    if (orbitControlRef.current) {
      orbitControlRef.current.update();
    }
  }, []);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1.5, 10]} />
      <OrbitControls ref={orbitControlRef} />

      {/* Ball */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={"#ffffff"} />
      </mesh>

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color={"#00ff00"} />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </>
  );
};

export default Three;
