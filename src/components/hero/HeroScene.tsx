"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function HeroImage() {
  const texture = useLoader(THREE.TextureLoader, "/images/heroHouse.webp");
  useLoader.preload(THREE.TextureLoader, "/images/heroHouse.webp");

  const meshRef = useRef<THREE.Mesh>(null);
  const elapsed = useRef(0);
  const { viewport, mouse } = useThree();

  const imageAspect = 1664 / 1024;

  let width = viewport.width;
  let height = width / imageAspect;

  if (height < viewport.height) {
    height = viewport.height;
    width = height * imageAspect;
  }

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    elapsed.current += delta;

    const time = elapsed.current;

    // Stronger cinematic drift
    const driftX = Math.sin(time * 0.22) * 0.35;
    const driftY = Math.cos(time * 0.17) * 0.18;

    // Mouse interaction
    const mouseX = mouse.x * 0.35;
    const mouseY = mouse.y * 0.2;

    meshRef.current.position.x = driftX + mouseX;

    meshRef.current.position.y = driftY + mouseY;

    // Gentle cinematic rotation
    meshRef.current.rotation.y =
      Math.sin(time * 0.18) * 0.035 + mouse.x * 0.025;

    meshRef.current.rotation.x =
      Math.cos(time * 0.15) * 0.018 - mouse.y * 0.015;

    // Noticeable breathing / push effect
    const zoom = 1.15 + Math.sin(time * 0.16) * 0.07;

    meshRef.current.scale.set(width * zoom, height * zoom, 1);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1]} />

      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

function CameraMotion() {
  const { camera, mouse } = useThree();
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    elapsed.current += delta;

    const time = elapsed.current;

    const cinematicX = Math.sin(time * 0.14) * 0.65;

    const cinematicY = Math.cos(time * 0.11) * 0.25;

    const cinematicZoom = 5.4 + Math.sin(time * 0.13) * 0.7;

    camera.position.x +=
      (cinematicX + mouse.x * 0.45 - camera.position.x) * 0.025;

    camera.position.y +=
      (cinematicY + mouse.y * 0.25 - camera.position.y) * 0.025;

    camera.position.z += (cinematicZoom - camera.position.z) * 0.025;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  return (
    <>
      <HeroImage />
      <CameraMotion />

      <fog attach="fog" args={["#090909", 4, 14]} />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5.4],
        fov: 45,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <Scene />
    </Canvas>
  );
}
