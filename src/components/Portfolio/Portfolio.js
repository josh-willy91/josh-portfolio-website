

import Cube from '../ThreeFiber/Cube';
import { Canvas } from '@react-three/fiber';
import Project from './Project/Project';
import './portfolio.css'

function Portfolio() {

  return (
    <div className='portfolio-wrapper'>
      <div className='portfolio-content'>
        <div className='project-feature'>
          <Project source='images/robinhood/robinhood-landing.JPG' />
        </div>
        <div className='info-feature'>
          <p className='top'>This is a clone of Robinhood. The front end is built using
            React/Redux. The back end if built with Python using Flask, SQLAlchemy,
            and postgreSQL.
          </p>
          <p className='bottom'>More porjects... email or connect on LinkedIn if you have questions</p>
        </div>
        <div className='top-left'>
          <Project source='images/robinhood/robinhood-landing.JPG' />
        </div>
        <div className='top-right'>
          <Project source='images/bookYeah/bookYeah-landing.JPG' />
        </div>
        <div className='bottom-left'>
          <Project source='images/goodClips/goodClips-movies.JPG' />
        </div>
        <div className='bottom-right'>
          <Project source='images/native/native-home.JPG' />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

  //   <Canvas>
  //   <ambientLight />
  //   <pointLight position={[10, 10, 10]} />
  //   <Cube position={[-1.2, 0, 0]} />
  //   <Cube position={[1.2, 0, 0]} />
  // </Canvas>

  // heroku create josh-portfolio-website --buildpack mars/create-react-app
