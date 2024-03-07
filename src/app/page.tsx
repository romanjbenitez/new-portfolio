"use client";

import styles from "./page.module.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import Keycap from "./Keycap";
import { BoxGeometry } from "three";

export default function Home() {


  return (
    <main className={styles.main}>
      <Canvas camera={{position : [0,2,0], fov: 1}}>
        <OrbitControls />
        <Suspense>
          <mesh position={[0,-200,0]} rotation={[0.3,4.55,.4]}>
            <Keycap />
          </mesh>
          <mesh position={[0,-200,.6] }  rotation={[0.3,4.55,.4]}>
            <Keycap />
          </mesh>
          <mesh position={[.6,-200,.6] }  rotation={[0.3,4.55,.4]}>
            <Keycap />
          </mesh>
          <mesh position={[-.6,-200,.6] }  rotation={[0.3,4.55,.4]}>
            <Keycap />
          </mesh>
        </Suspense>
      </Canvas>
    </main>
  );
}
