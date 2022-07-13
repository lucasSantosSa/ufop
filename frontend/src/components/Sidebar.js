import React from  'react';
import '../styles/Sidebar.css'
import { useState, useEffect } from 'react';

import HomeIcon from './HomeIcon'
import DashboardIcon from './DashboardIcon'
import MoreInfoIcon from './MoreInfoIcon'
import ContactIcon from './ContactIcon'
import AboutUsIcon from './AboutUsIcon'


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
    
    return(
        <div id="sidebar" className={open?'open':'closed'}>

            <button id='collapse' onClick={collapse}>Toggle</button>

            <p className={(props.page === 'Home'? 'active':'inactive')} id='Home' onClick={() => props.pageSetter("Home")}>
                <div id='icon'>
                    <HomeIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Página inicial</sbtext>
            </p>
            <p className={(props.page === 'Dashboard'?'active':'inactive')} id='Dashboard' onClick={() => props.pageSetter("Dashboard")}>
                <div id='icon'>
                    <DashboardIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Dashboard</sbtext>
            </p>
            <p className={(props.page === 'MoreProjects'? 'active':'inactive')} id='MoreProjects' onClick={() => props.pageSetter("MoreProjects")}>
                <div id='icon'>
                    <MoreInfoIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Conheça mais sobre nosso projeto</sbtext>
            </p>
            <p className={(props.page === 'Contact'?'active':'inactive')} id='Contact' onClick={() => props.pageSetter("Contact")}>
                <div id='icon'>
                    <ContactIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Contato</sbtext>
            </p>
            <p className={(props.page === 'AboutUs'?'active':'inactive')} id='AboutUs' onClick={() => props.pageSetter("AboutUs")}>
                <div id='icon'>
                    <AboutUsIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Sobre nós</sbtext>
            </p>
        </div>
    );

    
}

export default Sidebar;