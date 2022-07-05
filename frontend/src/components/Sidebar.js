import React from  'react';
import '../styles/Sidebar.css'
const Sidebar =(props)=>{
    
    return(
        <div id="sidebar">
            <a className={(props.page === 'Home'        ? 'active':'inactive')}     id='Home'           href='' > Página inicial                   </a>
            <a className={(props.page === 'Dashboard'   ? 'active':'inactive')}     id='Dashboard'      href='' > Dashboard                        </a>
            <a className={(props.page === 'MoreProjects'? 'active':'inactive')}     id='MoreProjects'   href='' > Conheça mais sobre nosso projeto </a>
            <a className={(props.page === 'Contact'     ? 'active':'inactive')}     id='Contact'        href='' > Contato                          </a>
            <a className={(props.page === 'AboutUs'     ? 'active':'inactive')}     id='AboutUs'        href='' > Sobre nós                        </a>
        </div>
    );

    
}

export default Sidebar;