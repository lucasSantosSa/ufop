import React from  'react';
import { useState, useEffect } from 'react';

import '../styles/Carousel.css'


const Carousel = (props) =>{

    const [index, setIndex] = useState(2);
    useEffect(() => {  
        showSlides()
    },[index]);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

async function showSlides() {
    let i = index;
    while(i<=4){
        i++
        await sleep(5000);
        if(i===4){
            i=1; 
        }// Change image every 2 seconds
        setIndex(i);
    }
  }

    return(
        <div id="Carousel" >
            
            <div className={index === 1 ? "active":"inactive"} id='Image'>
                <img src="https://www.southamericanescapes.com/wp-content/uploads/2014/11/OuroPreto.jpg" alt="Praça Tiradentes"/>
                <div id="label">Praça Tiradentes - Ouro Preto, MG</div>
            </div>
            <div className={index === 2 ? "active":"inactive"} id='Image'>
                <img src="https://saci2.ufop.br/data/foto/00721_big_band_172_copy_5734614023624753394.jpg" alt="Concha Acústica"/>
                <div id="label">Concha Acústica da UFOP - Ouro Preto, MG</div>
            </div>
            <div className={index === 3 ? "active":"inactive"} id='Image'>
                <img src="https://media-exp2.licdn.com/dms/image/C4D1BAQEp9FLodybloQ/company-background_10000/0/1579719291074?e=2147483647&v=beta&t=9Bse0EfV3Fu1BRRTJHbAyXG9VFT-zPGYD_xpdveR_Pg" alt="Portão de Entrada da UFOP"/>
                <div id="label">Portão Principal da UFOP - Ouro Preto, MG</div>
            </div>
            <div >
                <span id="dot" onclick=""></span>
                <span id="dot" onclick=""></span>
                <span id="dot" onclick=""></span>
            </div>
        </div>
    );
    
}

export default Carousel;