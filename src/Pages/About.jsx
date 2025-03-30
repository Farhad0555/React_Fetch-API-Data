import React from 'react';
import Mainlayout from '../Component/Mainlayout.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
const About = () => {
    return (
        
           <Mainlayout>
            <div className='text-center'>
            <h1 className='text-success'>Hi from About</h1>
        </div>
           </Mainlayout>  
        
    );
};

export default About;