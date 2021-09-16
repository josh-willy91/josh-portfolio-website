import React, { useEffect } from 'react';
import './carousel.css'

function Carousel({ images, count, setCount }) {


    const imagesLength = images.length -2;
    console.log(imagesLength)

    function handleClick(direction) {
        if(direction === 'right') {
            if (count > imagesLength) {
                setCount(0);
            } else {
                setCount(count + 1);
            };
        } else {
            if(count < 1) {
                setCount(imagesLength + 1)
            } else {
                setCount(count -1)
            }
        };
    };


    return (
        <div className='carousel-wrapper'>
            <div className='arrow-wrapper' onClick={() => handleClick('left')}>
                <span className='arrowLeft'></span>
            </div>
            <img src={images[count]} />
            <div className='arrow-wrapper' onClick={() => handleClick('right')} >
                <span className='arrowRight'></span>
            </div>
        </div>
    )
}

export default Carousel;
