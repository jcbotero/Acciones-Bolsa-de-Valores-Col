//carousels/Responsive.js
import { Carousel } from "react-responsive-carousel";
import { items } from "/empresas.json";
import { items2 } from "/empresasEnglish.json";
import styles from '/styles/Home.module.css'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from 'react'


export default function ResponsiveCarousel({idioma}) {

 

  const [ carrusell , setResponsive] = useState ( items2 ) // aqui le doy al hook el valor de el object que esta en el archivo .json

  let { responsive } = carrusell; // el object a mapear que es responsive.... aqui es igual al hook carrusel, el cual cambia de items2(ingles) a item(español) dependiendo del clickeo en las banderas

  useEffect(()=> {
            
    if ( idioma == "English") {

     setResponsive(items2)

    } else {

      setResponsive(items)

    }
    
    
     
  }) 
    

  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showStatus={true}
        showThumbs={true}
        className={styles.mySwiper}
      >
        {responsive.map((item) => (
          <div key={item.id} className={styles.swipItem}>
            <div className={styles.imgBox}>
              <img src={item.imageUrl} alt="slides" />
            </div>
            <div className={styles.detail}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}