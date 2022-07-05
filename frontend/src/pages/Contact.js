import React from  'react';
import '../styles/Contact.css'
import Sidebar from '../components/Sidebar';
const Contact =(props)=>{
    return(
        <div id="Contact" >
            <header id='Contact-header' className={(props.active?'active':'inactive')}>
                
            </header>
        </div>
    );
}

export default Contact;