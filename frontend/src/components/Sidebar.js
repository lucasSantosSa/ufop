import React from  'react';
import '../styles/Sidebar.css'
import { useState } from 'react';

import HomeIcon from './HomeIcon'
import DashboardIcon from './DashboardIcon'
import MoreInfoIcon from './MoreInfoIcon'
import ContactIcon from './ContactIcon'
import AboutUsIcon from './AboutUsIcon'
import ToggleIcon from './ToggleIcon'


const Sidebar = (props) =>{
    const [open, setOpen] = useState(true)

    const collapse = () =>{
        if(open){
            setOpen(false);
            return;
        }
        setOpen(true);
        return;

    }

    async function links(route){
        await props.rerouter(route)
    }
    
    return(
        <div id="sidebar" className={open?'open':'closed'}>
            <div  id="toggle" onClick={collapse} >
                <ToggleIcon collapse={open?true:false}/>
            </div>
            <span id='Home' className={(props.page === 'home'? 'active':'inactive')}  onClick={() => links("home")}>
                <div id='icon'>
                    <HomeIcon collapse={open?'open':'closed'}/>
                </div>
                <p id='label'>Página inicial</p>
            </span>

            <span id='Dashboard' className={(props.page === 'dashboard'?'active':'inactive')} onClick={() => links("dashboard")}>
                <div id='icon'>
                    <DashboardIcon collapse={open?'open':'closed'}/>
                </div>
                <p id='label'>Dashboard</p>
            </span>
            
            <span id='MoreProjects' className={(props.page === 'moreprojects'? 'active':'inactive')} onClick={() => links("moreprojects")}>
                <div id='icon'>
                    <MoreInfoIcon collapse={open?'open':'closed'}/>
                </div>
                <p id='label'>Conheça mais sobre nosso projeto</p>
            </span>
            
            <span id='Contact' className={(props.page === 'contact'?'active':'inactive')} onClick={() => links("contact")}>
                <div id='icon'>
                    <ContactIcon collapse={open?'open':'closed'}/>
                </div>
                <p id='label'>Contato</p>
            </span>
            
            <span id='AboutUs' className={(props.page === 'aboutus'?'active':'inactive')} onClick={() => links("aboutus")}>
                <div id='icon'>
                    <AboutUsIcon collapse={open?'open':'closed'}/>
                </div>
                <p id='label'>Sobre nós</p>
            </span>
            
        </div>
    );

    
}

export default Sidebar;