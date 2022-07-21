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
  const [page,setPage] = useState('dashboard');
  const [pageRoute, setPageRoute] = useState('/dashboard')

  useEffect(() => {
    api.get(pageRoute)
  },[page]);

  async function rerouter(address){
    setPageRoute("/"+address);
    await api.get(pageRoute);
    setPage(address)
  }
  return (
    <div id='MainApp'>
      <Sidebar page={page} rerouter={rerouter}/>
      <Home         active= {page === 'home'        } />
      <Dashboard    active= {page === 'dashboard'   } />
      <MoreProjects active= {page === 'moreprojects'} />
      <Contact      active= {page === 'contact'     } />
      <AboutUs      active= {page === 'aboutus'     } />
    </div>
  );
}

export default App;
