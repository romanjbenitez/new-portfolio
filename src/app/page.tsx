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
      <Canvas camera={{position : [0,10,0], fov: 25}}>
        <Suspense>
          <mesh position={[1.4,-5,-0.9]} rotation={[0.3,4.55,.4]}>
            <Keycap />
          </mesh>
          <mesh position={[2,-5,-0.3] }  rotation={[0.3,4.55,.4]}>
            <Keycap />
          </mesh>
          <mesh position={[1.4,-5,-0.3] }  rotation={[0.3,4.55,.4]}>
            <Keycap />
          </mesh>
          <mesh position={[0.8,-5,-0.3] }  rotation={[0.3,4.55,.4]}>
            <Keycap />
          </mesh>
        </Suspense>
      </Canvas>
    </main>
  );
}
