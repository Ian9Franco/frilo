"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { look } from "@/lib/pointer";

const hide = { color: "#16110f", metalness: 0.74, roughness: 0.34 };
const brass = { color: "#e4d0b0", metalness: 0.94, roughness: 0.16 };

function Bone({ a, b, radius, material }) {
  const start = new THREE.Vector3(...a);
  const end = new THREE.Vector3(...b);
  const dir = end.clone().sub(start);
  const length = Math.max(dir.length(), 0.001);
  const mid = start.clone().add(dir.clone().multiplyScalar(0.5));
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    dir.clone().normalize(),
  );
  return (
    <mesh position={mid} quaternion={quaternion} castShadow>
      <cylinderGeometry args={[radius, radius * 0.72, length, 12]} />
      <meshStandardMaterial {...material} />
    </mesh>
  );
}

function antlerBones(side) {
  const s = side;
  return [
    [[0.86, 0.78, 0.05 * s], [0.74, 1.28, 0.18 * s], 0.028],
    [[0.78, 0.98, 0.1 * s], [1.02, 1.08, 0.32 * s], 0.015],
    [[0.76, 1.12, 0.14 * s], [1.0, 1.28, 0.24 * s], 0.013],
    [[0.75, 1.22, 0.16 * s], [0.9, 1.5, 0.08 * s], 0.011],
  ];
}

function Stag() {
  const group = useRef(null);
  const reduce = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useFrame((state) => {
    const node = group.current;
    if (!node) return;
    const t = state.clock.elapsedTime;
    const sway = reduce ? 0.15 : Math.sin(t * 0.32) * 0.42;
    const bob = reduce ? 0 : Math.sin(t * 0.85) * 0.045;
    const desktop = window.innerWidth >= 768;
    node.rotation.y = THREE.MathUtils.damp(node.rotation.y, sway + look.x * 0.45, 3, 0.016);
    node.rotation.x = THREE.MathUtils.damp(node.rotation.x, 0.06 - look.y * 0.16, 3, 0.016);
    node.position.y = bob;
    node.position.x = desktop ? -1.05 : 0;
  });

  const legs = [
    [-0.38, -0.15, 0.16],
    [-0.38, -0.15, -0.16],
    [0.32, -0.12, 0.15],
    [0.32, -0.12, -0.15],
  ];

  return (
    <group ref={group} position={[0.05, -0.15, 0]} scale={1.12}>
      <mesh position={[-0.05, 0.12, 0]} scale={[1.25, 0.58, 0.46]} castShadow>
        <sphereGeometry args={[0.48, 48, 32]} />
        <meshStandardMaterial {...hide} />
      </mesh>
      <mesh position={[0.42, 0.2, 0]} scale={[0.55, 0.42, 0.4]} castShadow>
        <sphereGeometry args={[0.36, 32, 24]} />
        <meshStandardMaterial {...hide} />
      </mesh>
      <Bone a={[0.48, 0.28, 0]} b={[0.9, 0.62, 0]} radius={0.1} material={hide} />
      <mesh position={[1.02, 0.66, 0]} scale={[1.2, 0.82, 0.78]} castShadow>
        <sphereGeometry args={[0.22, 32, 24]} />
        <meshStandardMaterial {...hide} />
      </mesh>
      <mesh position={[1.24, 0.58, 0]} scale={[1.1, 0.7, 0.7]}>
        <sphereGeometry args={[0.1, 24, 16]} />
        <meshStandardMaterial {...hide} />
      </mesh>
      <mesh position={[0.9, 0.86, 0.1]} rotation={[0.3, 0, -0.5]}>
        <coneGeometry args={[0.06, 0.2, 10]} />
        <meshStandardMaterial {...hide} />
      </mesh>
      <mesh position={[0.9, 0.86, -0.1]} rotation={[-0.3, 0, -0.5]}>
        <coneGeometry args={[0.06, 0.2, 10]} />
        <meshStandardMaterial {...hide} />
      </mesh>
      <mesh position={[-0.62, 0.22, 0]} rotation={[0, 0, 0.8]}>
        <coneGeometry args={[0.05, 0.16, 8]} />
        <meshStandardMaterial {...hide} />
      </mesh>
      {legs.map((position) => (
        <Bone key={position.join(":")} a={position} b={[position[0] + 0.04, -0.82, position[2]]} radius={0.045} material={hide} />
      ))}
      {antlerBones(1).map(([a, b, radius]) => (
        <Bone key={`r-${a.join()}`} a={a} b={b} radius={radius} material={brass} />
      ))}
      {antlerBones(-1).map(([a, b, radius]) => (
        <Bone key={`l-${a.join()}`} a={a} b={b} radius={radius} material={brass} />
      ))}
    </group>
  );
}

function Motes() {
  const ref = useRef(null);
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }, () => ({
        position: [(Math.random() - 0.5) * 5.4, Math.random() * 2.6 - 0.3, (Math.random() - 0.5) * 2.4],
        scale: 0.008 + Math.random() * 0.012,
      })),
    [],
  );
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.04;
  });
  return (
    <group ref={ref}>
      {dots.map((dot, index) => (
        <mesh key={index} position={dot.position}>
          <sphereGeometry args={[dot.scale, 8, 8]} />
          <meshBasicMaterial color="#ead8b8" transparent opacity={0.75} />
        </mesh>
      ))}
    </group>
  );
}

function Stage() {
  return (
    <>
      <color attach="background" args={["#0a0809"]} />
      <fog attach="fog" args={["#0a0809", 4.2, 9]} />
      <hemisphereLight args={["#f3e6d4", "#140e0c", 0.7]} />
      <spotLight position={[3.2, 4.2, 3.4]} angle={0.48} penumbra={0.85} intensity={90} color="#ffd8b4" />
      <spotLight position={[-3.4, 1.6, -2.2]} angle={0.7} penumbra={1} intensity={28} color="#9eb4cc" />
      <Stag />
      <Motes />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.15, -0.98, 0]}>
        <ringGeometry args={[0.95, 1.02, 80]} />
        <meshStandardMaterial color="#c6a57a" metalness={0.8} roughness={0.28} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

export function DeerScene() {
  return (
    <Canvas
      camera={{ position: [0.15, 0.35, 4.5], fov: 32 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.12;
      }}
    >
      <Stage />
    </Canvas>
  );
}

function CrestMark() {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.45;
  });
  return (
    <group ref={ref} scale={1.35}>
      {antlerBones(1).map(([a, b, radius]) => (
        <Bone key={`cr-${a.join()}`} a={[a[0] - 0.8, a[1] - 0.9, a[2]]} b={[b[0] - 0.8, b[1] - 0.9, b[2]]} radius={radius * 1.15} material={brass} />
      ))}
      {antlerBones(-1).map(([a, b, radius]) => (
        <Bone key={`cl-${a.join()}`} a={[a[0] - 0.8, a[1] - 0.9, a[2]]} b={[b[0] - 0.8, b[1] - 0.9, b[2]]} radius={radius * 1.15} material={brass} />
      ))}
      <mesh>
        <torusGeometry args={[0.72, 0.012, 12, 64]} />
        <meshStandardMaterial {...brass} />
      </mesh>
    </group>
  );
}

export function CrestScene() {
  return (
    <Canvas camera={{ position: [0, 0.15, 2.4], fov: 35 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <spotLight position={[2, 2, 2]} intensity={30} color="#ffe1c2" />
      <CrestMark />
    </Canvas>
  );
}
