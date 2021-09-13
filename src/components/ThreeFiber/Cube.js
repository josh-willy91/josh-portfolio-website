import React, { useRef, useState } from "react";

import { Canvas, useFrame } from '@react-three/fiber'
import { BoxBufferGeometry, MeshStandardMaterial } from "three";

// import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei';
import './cube.css'




function Cube({ position, args, color }) {
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    return (
        <mesh castShadow position={position} ref={mesh}>
            <boxBufferGeometry attach='geometry' args={args} />
            <meshStandardMaterial attach='material' color={color}/>
        </mesh>
    );
}

export default Cube;


// <mesh
//     ref={ref}
//     scale={active ? 1.5 : 1}
//     onClick={(event) => setActive(!active)}
//     onPointerOver={(event) => setHover(true)}
//     onPointerOut={(event) => setHover(false)}>
//     <boxGeometry args={[1, 1, 1]} />
//     <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
// </mesh>



// <div className='cube-wrapper'>
//     <h3>Cube Spinning</h3>
// </div>
