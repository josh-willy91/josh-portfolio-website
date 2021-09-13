import { Switch, Route } from "react-router-dom";
// import { Router, Switch, Route } from 'wouter';
import { Canvas } from 'react-three-fiber';
import Cube from "./components/ThreeFiber/Cube";
import Plane from "./components/ThreeFiber/Plane";

import Navigation from "./components/Navigation/Navigation";
import Welcome from "./components/Welcome/Welcome";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact={true}>
          <Welcome />
        </Route>
        <Route path="/portfolio" exact={true}>
          <Portfolio />
        </Route>
        <Route path="/about-me" exact={true}>
          <AboutMe />
        </Route>
        {/* <Route path="/cube" exact={true}>
          <Canvas>

          </Canvas>
        </Route> */}
      </Switch>
    </>
  );
}

export default App;


{/* <Canvas
shadowMap
colorManagement
camera={{ position: [-5, 2, 10], fov: 60 }}
>
<ambientLight intensity={0.3} />
<directionalLight
  castShadow
  position={[3, 10, 0]}
  intensity={1.5}
  shadow-mapSize-width={1024}
  shadow-mapSize-height={1024}
  shadow-camera-far={50}
  shadow-camera-near={0.5}
  shadow-camera-left={-10}
  shadow-camera-right={10}
  shadow-camera-top={10}
  shadow-camera-bottom={-10}
/>

{/* <Plane />

<Cube position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' />
<Cube position={[-2, 1, -5]} color='pink' />
<Cube position={[5, 1, -2]} color='pink' /> */}
{/* <OrbitControls />
<Stars /> */}
// </Canvas> */}
