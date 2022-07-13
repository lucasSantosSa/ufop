import React from  'react';
import '../styles/Sidebar.css'
import { useState, useEffect } from 'react';
import api from '../services/api';

import HomeIcon from './HomeIcon'
import DashboardIcon from './DashboardIcon'
import MoreInfoIcon from './MoreInfoIcon'
import ContactIcon from './ContactIcon'
import AboutUsIcon from './AboutUsIcon'


const Sidebar =(props, {apiBridge})=>{
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

            <a className={(props.page === 'Home'? 'active':'inactive')} id='Home' href={api.get('/Home')}>
                <div id='icon'>
                    <HomeIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Página inicial</sbtext>
            </a>
            <a className={(props.page === 'Dashboard'?'active':'inactive')} id='Dashboard' href={api.get('/Dashboard')}>
                <div id='icon'>
                    <DashboardIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Dashboard</sbtext>
            </a>
            <a className={(props.page === 'MoreProjects'? 'active':'inactive')} id='MoreProjects' href={api.get('/MoreProjects')}>
                <div id='icon'>
                    <MoreInfoIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Conheça mais sobre nosso projeto</sbtext>
            </a>
            <a className={(props.page === 'Contact'?'active':'inactive')} id='Contact' href={api.get('/Contact')}>
                <div id='icon'>
                    <ContactIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Contato</sbtext>
            </a>
            <a className={(props.page === 'AboutUs'?'active':'inactive')} id='AboutUs' href={api.get('/AboutUs')}>
                <div id='icon'>
                    <AboutUsIcon collapse={open?'open':'closed'}/>
                </div>
                <sbtext>Sobre nós</sbtext>
            </a>
        </div>
    );

    
}

export default Sidebar;