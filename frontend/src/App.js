import React from 'react';
import { useState, useEffect } from 'react';

import './styles/App.css'
import Home         from './pages/Home';
import Dashboard    from './pages/Dashboard'
import MoreProjects from './pages/MoreProjects'
import Contact      from './pages/Contact'
import AboutUs      from './pages/AboutUs'

import Sidebar      from './components/Sidebar';
import api from './services/api';



function App() {
  const [page,setPage] = useState('Home');

  useEffect(() => {
  },[page]);

  function pageSetter(pageIndex){
    setPage(pageIndex)
  }

  return (
    <div id='MainApp'>
      <Sidebar page={page} pageSetter={pageSetter}/>
      <Home         active= {page === 'Home'        } />
      <Dashboard    active= {page === 'Dashboard'   } />
      <MoreProjects active= {page === 'MoreProjects'} />
      <Contact      active= {page === 'Contact'     } />
      <AboutUs      active= {page === 'AboutUs'     } />
      <img src="https://www.southamericanescapes.com/wp-content/uploads/2014/11/OuroPreto.jpg" alt="ouropretobackground" id="background-jpg" />
    </div>
  );
}

export default App;
