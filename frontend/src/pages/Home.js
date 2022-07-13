import React from  'react';
import '../styles/Home.css'
import UfopLogo from '../components/UfopLogo';

function Home(props) {
  return (
    <div id="Home" >
      <header id="Home-header" className={(props.active?'active':'inactive')}>
        <UfopLogo />
      </header>
    </div>
    
  );
}

export default Home;
