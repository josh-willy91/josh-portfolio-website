import React, { useRef, useState } from "react";

import { Canvas, useFrame } from '@react-three/fiber'
import { BoxBufferGeometry, MeshStandardMaterial } from "three";


function Plane() {

    return (
        <group>
            <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
            >
                <planeBufferGeometry attach='geometry' args={[100, 100]} />
                <shadowMaterial attach='material' opacity={0.3} />
            </mesh>
        </group>
    );
}

export default Plane;
