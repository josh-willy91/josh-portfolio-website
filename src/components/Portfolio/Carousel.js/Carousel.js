import React, { useEffect } from 'react';
import './carousel.css'

function Carousel({images, onClick, setOnClick}) {


    const imageArray = images.length;
    let count = 0;


    useEffect(() => {

        if(onClick) {
            if(count === 4) {
                count = 0;
            } else {
                count += 1;
            };
        };
        setOnClick(false)
    }, [onClick])

    console.log(count, '======count=========')
    console.log(images[count], '======image=========')
    return (
        <div className='carousel-wrapper'>
            <div className='arrow-wrapper'>
                <span className='arrowLeft'></span>
            </div>
            <img src={images[count]} />
            <div className='arrow-wrapper'>
                <span className='arrowRight'></span>
            </div>
        </div>
    )
}

export default Carousel;
