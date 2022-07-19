import React from  'react';
import '../styles/Home.css'
import UfopLogo from '../components/UfopLogo';
import Carousel from '../components/Carousel';

function Home(props) {
  return (
    <div id="Home" >
      <header id="Home-header" className={(props.active?'active':'inactive')}>
        <UfopLogo />
        <Carousel />
      </header>
    </div>
    
  );
}

export default Home;
