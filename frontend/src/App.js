import React from 'react';
import './App.css'
import Home         from './pages/Home';
import Dashboard    from './pages/Dashboard'
import MoreProjects from './pages/MoreProjects'
import Contact      from './pages/Contact'
import AboutUs      from './pages/AboutUs'

import Sidebar      from './components/Sidebar';

import { useState, useEffect } from 'react';

function App() {
  const [page,setPage] = useState('Home');
  
  const pageSelector=()=>{
    return(
      <>
        <Home         active= {page === 'Home'        } />
        <Dashboard    active= {page === 'Dashboard'   } />
        <MoreProjects active= {page === 'MoreProjects'} />
        <Contact      active= {page === 'Contact'     } />
        <AboutUs      active= {page === 'AboutUs'     } />
      </>
    );
  }

  return (
    <div id='MainApp'>
      <Sidebar page="Home"/>
      {pageSelector()}
    </div>
  );
}

export default App;
