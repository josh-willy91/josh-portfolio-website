
import react, { useState, useEffect } from 'react';
import Cube from '../ThreeFiber/Cube';
import { Canvas } from '@react-three/fiber';
import Carousel from './Carousel.js/Carousel';
import './portfolio.css'

function Portfolio() {

  const [featureCount, setFeatureCount] = useState(0);
  const [topLeftCount, setTopLeftCount] = useState(0);
  const [topRightCount, setTopRightCount] = useState(0);
  const [bottomLeftCount, setBottomLeftCount] = useState(0);

  const bookYeahImages = [
    'images/bookYeah/bookYeah-landing.JPG',
    'images/bookYeah/bookYeah-home.JPG',
    'images/bookYeah/bookYeah-search.JPG',
    'images/bookYeah/bookYeah-dashboard.JPG',
  ]

  const robinhoodImages = [
    'images/robinhood/robinhood-landing.JPG',
    'images/robinhood/robinhood-home.JPG',
    'images/robinhood/robinhood-search.JPG',
    'images/robinhood/robinhood-stock.JPG',
  ]

  const goodClipsImages = [
    'images/goodClips/goodClips-auth.JPG',
    'images/goodClips/goodClips-movies.JPG',
    'images/goodClips/goodClips-profile.JPG',
    'images/goodClips/goodClips-search.JPG',
  ]

  const nativeImages = [
    'images/native/native-event.JPG',
    'images/native/native-home.JPG',
  ]



  return (
    <div className='portfolio-wrapper'>
      <div className='portfolio-content'>
        <div className='skills-wrapper'>
          <h2>Technologies</h2>
          <div className='skills-content'>
            <img className='skills-icons' src='images/icons/python.png' alt='technology'></img>
            <img className='skills-icons' src='images/icons/javascript.png' alt='technology'></img>
            <img className='skills-icons' src='images/icons/reactredux.jpg' alt='technology'></img>
            <img className='skills-icons' src='images/icons/node.png' alt='technology'></img>
            <img className='skills-icons' src='images/icons/express.png' alt='technology'></img>
            <img className='skills-icons' src='images/icons/flask.png' alt='technology'></img>
            <img className='skills-icons' src='images/icons/sqlalchemy.png' alt='technology'></img>
            <img className='skills-icons' src='images/icons/sequelize.png' alt='technology'></img>
            <img className='skills-icons' src='images/icons/css.png' alt='technology'></img>
            <img className='skills-icons' src='images/icons/html.png' alt='technology'></img>
            <img className='skills-icons' src='images/icons/wordpress.jpg' alt='technology'></img>
          </div>
        </div>
        <div className='project-feature' >
          <Carousel images={robinhoodImages} count={featureCount} setCount={setFeatureCount} />
          <p className='project-feature__details'>
            <h2>Robinhood Clone</h2>
            <a href='https://robinhood-clone-jjeg.herokuapp.com/'
              target="_blank"
              rel="noopener noreferrer">Live</a> | <a href='https://github.com/josh-willy91/Robinhood-clone'
              target="_blank"
              rel="noopener noreferrer">Repo</a>
            <br/>
            This is a clone of Robinhood. The front end is built using
            React/Redux. The back end is built with Python using Flask, SQLAlchemy,
            and postgreSQL.
          </p>
        </div>
        <div className='info-feature'>
          <p>More noteable porjects...</p>
        </div>
        <div className='top-left'>
          <Carousel images={bookYeahImages} count={topLeftCount} setCount={setTopLeftCount} />
          <p className='project-details'>
            <h3>Flight Search App</h3>
            <a href='https://book-yeah-flight-search-app.herokuapp.com/'
              target="_blank"
              rel="noopener noreferrer">Live</a> | <a href='https://github.com/josh-willy91/flight_booking_clone'
              target="_blank"
              rel="noopener noreferrer">Repo</a>
            <br/>
            This is a flight finder/booking app. The front end is built using
            React/Redux. The back end is built with Python using Flask, SQLAlchemy,
            and postgreSQL.
          </p>
        </div>
        <div className='top-right'>
          <Carousel images={goodClipsImages} count={topRightCount} setCount={setTopRightCount} />
          <p className='project-details'>
            <h3>GoodReads Clone</h3>
            <a href='https://github.com/josh-willy91/group-project-12'
              target="_blank"
              rel="noopener noreferrer">Live</a> | <a href='https://github.com/josh-willy91/group-project-12'
              target="_blank"
              rel="noopener noreferrer">Repo</a>
            <br/>
            This project is a clone of GoodReads but with movies.
            The front end is built using HTML, CSS, and Pug which is a
            templating engine. The back end is built with Node.js,
            Express, Sequelize, and postgreSQL.
          </p>
        </div>
        <div className='bottom-left'>
          <Carousel images={nativeImages} count={bottomLeftCount} setCount={setBottomLeftCount} />
          <p className='project-details'>
            <h3>MeetUp Clone</h3>
            <a href='https://github.com/josh-willy91/native-soloProject'
              target="_blank"
              rel="noopener noreferrer">Live</a> | <a href='https://github.com/josh-willy91/native-soloProject'
              target="_blank"
              rel="noopener noreferrer">Repo</a>
            <br/>
            This is a clone of MeetUp. The front end is built using
            React/Redux. The back end is built with Node.js, Express,
            Sequelize, and postgreSQL.
          </p>
        </div>
        {/* <div className='bottom-right' >
          <Carousel images={bookYeahImages} count={count} setCount={setCount} />
          <p className='project-details'>
            <a>Live</a> | <a>Repo</a>
            <br/>
            This is a clone of Robinhood. The front end is built using
            React/Redux. The back end is built with Python using Flask, SQLAlchemy,
            and postgreSQL.
          </p>
        </div> */}
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
