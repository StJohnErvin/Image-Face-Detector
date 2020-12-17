import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css';


const Logo = () => {

    return (
        <div className='ma4 mt0 '>
            <Tilt className="Tilt  shadow-2"
             options={{ max: 55 }}
              style={{ height: 120,
               width: 120 }} >
                <div className="Tilt-inner pa1">
                    <img  src={face} alt="face"/></div>
            </Tilt>
        </div>


    )
}
export default Logo;