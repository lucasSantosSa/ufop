import React from  'react';
import '../styles/MoreProjects.css'
import Sidebar from '../components/Sidebar';
const MoreProjects =(props)=>{
    return(
        <div id="MoreProjects" >
            <header id="MoreProjects-header" className={(props.active?'active':'inactive')}>

            </header>
        </div>
    );
}

export default MoreProjects;