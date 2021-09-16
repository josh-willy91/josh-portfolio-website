import react, { useRef } from 'react';
import './project.css'


function Project({source}) {

    // const switcher = useRef()

    // switcher.current.classList.add('image-show')

    // console.log(switcher.current, 'switcher===============')
    // console.log(useRef(), 'useRef===============')



    return (
        <div className='project'>
            {/* <img hidden src={source} useRef={switcher}></img> */}
            <img src={source}></img>
            <img hidden src={source}></img>
            <img hidden src={source}></img>
        </div>
    )
};

export default Project;
