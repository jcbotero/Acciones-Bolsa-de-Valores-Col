//carousels/Responsive.js
import { Carousel } from "react-responsive-carousel";
import { items } from "/empresas.json";
import styles from '/styles/Home.module.css'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ResponsiveCarousel() {
  const { responsive } = items;
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