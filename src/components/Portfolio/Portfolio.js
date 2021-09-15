
import react, { useState, useEffect } from 'react';
import Cube from '../ThreeFiber/Cube';
import { Canvas } from '@react-three/fiber';
import Project from './Project/Project';
import './portfolio.css'

function Portfolio() {

    const images =
    ['images/robinhood/robinhood-landing.JPG',
    'images/robinhood/robinhood-home.JPG',
    'images/robinhood/robinhood-search.JPG',
    'images/robinhood/robinhood-stock.JPG',
  ]
  // const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  const [sourceImg, setSourceImg] = useState(images)
  const [switcher, setSwitcher] = useState(false)



  useEffect(() => {

    setInterval(() => {
      let array = sourceImg
      let temp = sourceImg.splice(0, 1);
      console.log(temp, sourceImg, '============temp============')

      // array.push(...temp)

      setSourceImg([...sourceImg, ...temp])
      console.log(sourceImg, '=========line 33==================')


    }, 3000)

  }, [sourceImg])

  // console.log(hover, '==============hover=====================')
  // const [source, setSource] = useState(false);


  // function robinhoodImages() {
  //   const images =
  //   ['images/robinhood/robinhood-landing.JPG',
  //   'images/robinhood/robinhood-home.JPG',
  //   'images/robinhood/robinhood-search.JPG',
  //   'images/robinhood/robinhood-stock.JPG',
  // ]
  // // let switchImage;
  //   let source = images[0];
  //   let newSource = '';

  //   for(let i = 1; i < images.length; i++) {
  //     let last = images[i - 1]
  //     // console.log(last, '====last====')
  //     if(source === last) {
  //       newSource = images[i];
  //       // console.log(array[i], '============array[i]=================')
  //       // console.log(newSource, '============newSource=================')
  //       console.log(newSource, '=============newSource==================')
  //       return newSource
  //     };
  //   }
  //   return source
  // };
  // let source = robinhoodImages();
  // let source = 'images/robinhood/robinhood-landing.JPG';
  // console.log(source, '===========47===============')


  return (
    <div className='portfolio-wrapper'>
      <div className='portfolio-content'>
        <div className='project-feature'
          // onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}
          >
          <Project source={sourceImg[0]} />
          <p className='project-details'>
            <a href='https://robinhood-clone-jjeg.herokuapp.com/'
              target="_blank"
              rel="noopener noreferrer">Live</a> | <a href='https://github.com/josh-willy91/Robinhood-clone'
              target="_blank"
              rel="noopener noreferrer">Repo</a>
            <br/>
            This is a clone of Robinhood. The front end is built using
            React/Redux. The back end if built with Python using Flask, SQLAlchemy,
            and postgreSQL.
          </p>
        </div>
        <div className='info-feature'>
          <p>More noteable porjects...</p>
        </div>
        <div className='top-left'>
          <Project source='images/bookYeah/bookYeah-landing.JPG' />
          <p className='project-details'>
            <a href='https://book-yeah-flight-search-app.herokuapp.com/'
              target="_blank"
              rel="noopener noreferrer">Live</a> | <a href='https://github.com/josh-willy91/flight_booking_clone'
              target="_blank"
              rel="noopener noreferrer">Repo</a>
            <br/>
            This is a flight finder/booking app. The front end is built using
            React/Redux. The back end if built with Python using Flask, SQLAlchemy,
            and postgreSQL.
          </p>
        </div>
        <div className='top-right'>
          <Project source='images/goodClips/goodClips-movies.JPG' />
          <p className='project-details'>
            <a href='https://github.com/josh-willy91/group-project-12'
              target="_blank"
              rel="noopener noreferrer">Live</a> | <a href='https://github.com/josh-willy91/group-project-12'
              target="_blank"
              rel="noopener noreferrer">Repo</a>
            <br/>
            This project is a clone of GoodReads but with movies.
            The front end is built using HTML, CSS, and Pug which is a
            templating engine. The back end if built with Node.js,
            Express, Sequelize, and postgreSQL.
          </p>
        </div>
        <div className='bottom-left'>
          <Project source='images/native/native-home.JPG' />
          <p className='project-details'>
            <a href='https://github.com/josh-willy91/native-soloProject'
              target="_blank"
              rel="noopener noreferrer">Live</a> | <a href='https://github.com/josh-willy91/native-soloProject'
              target="_blank"
              rel="noopener noreferrer">Repo</a>
            <br/>
            This is a clone of MeetUp. The front end is built using
            React/Redux. The back end if built with Node.js, Express,
            Sequelize, and postgreSQL.
          </p>
        </div>
        {/* <div className='bottom-right'>
          <Project source='images/robinhood/robinhood-landing.JPG' />
          <p className='project-details'>
            <a>Live</a> | <a>Repo</a>
            <br/>
            This is a clone of Robinhood. The front end is built using
            React/Redux. The back end if built with Python using Flask, SQLAlchemy,
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
