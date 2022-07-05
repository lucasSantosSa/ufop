import React from  'react';
import '../styles/Home.css'
import UfopLogo from '../components/UfopLogo';

function Home(props) {
  return (
    <div id="Home" >
      <header id="Home-header" className={(props.active?'active':'inactive')}>
        <img src="https://www.southamericanescapes.com/wp-content/uploads/2014/11/OuroPreto.jpg" alt="ouropretobackground" id="background-jpg" />
        <UfopLogo />
      </header>
    </div>
    
  );
}

export default Home;
