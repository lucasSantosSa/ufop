import React from  'react';
import '../styles/AboutUs.css'
import Sidebar from '../components/Sidebar';
const AboutUs =(props)=>{
    return(
        <div id="AboutUs" >
            <header id='AboutUs-header' className={(props.active?'active':'inactive')}>

            </header>
        </div>
    );
}

export default AboutUs;