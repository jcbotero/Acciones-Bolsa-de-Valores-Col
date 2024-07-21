import Footer from '../footer'
import Bread2 from './bread2'
import Edu1 from './educacion1'
import Edu2 from './educacion2'
import Edu3 from './educacion3'
import Intro from './intro'
import styles from '/styles/Home.module.css'
import React from 'react'
import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'

export default class Bread extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      component :  < Intro  />,
      setIdioma : "English",
      intro : "Introduction",
      Part1 : "Part I",
      Part2 : "Part II",
      Part3 : "Part III"
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.english = this.english.bind(this);
    this.espanish = this.espanish.bind(this);

  };


  componentDidMount() {
   
  }
  
   handleClick() {
    document.getElementById("component").style.display = "flex"
    this.setState({ 
      component :  < Intro lenguague={this.state.setIdioma}  />

   });



  }
   handleClick2() {
    document.getElementById("component").style.display = "flex"
    this.setState({ 
      component :  < Edu1 lenguague={this.state.setIdioma} />
   })
  }
   handleClick3() {
    document.getElementById("component").style.display = "flex"
    this.setState({ 
      component :  < Edu2 lenguague={this.state.setIdioma} />
   })}


   handleClick4() {
    document.getElementById("component").style.display = "flex"
    this.setState({ 
      component :  < Edu3 lenguague={this.state.setIdioma} />
   })}


   english() {
    document.getElementById("component").style.display = "none"
    this.setState({ 
      setIdioma : "English",
      intro : "Introduction",
      Part1 : "Part I",
      Part2 : "Part II",
      Part3 : "Part III"
   })} // aqui estoy cambiando el state de este class component

   espanish() {
    document.getElementById("component").style.display = "none"
    this.setState({ 
      setIdioma : "Spanish",
      intro : "Introducción",
      Part1 : "Parte I",
      Part2 : "Parte II",
      Part3 : "Parte III"
   })}
  
// empezar a mirar los otros components despues de intro

  render() {
    

    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=DM+Sans:wght@500&family=Delicious+Handrawn&family=Inter:wght@200;600;700;900&family=League+Spartan:wght@900&family=Roboto+Condensed&family=Rubik&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/068ec41cf0.js" crossorigin="anonymous"></script>
        </Head>
        <div className={styles.main} >
        <div className={styles.flags}>
                  <img onClick={this.english} src='./american.jpg' ></img>
                  <img onClick={this.espanish} src='./spanish.jfif' ></img>
                </div>
          < Bread2 lenguague={this.state.setIdioma}  /> {/* pasando un state como prop de un class componente a un functional*/}
          <div className={styles.edubuttons}>
            <button onClick={this.handleClick}>{this.state.intro}</button>
            <p>&#8594;</p>
            <button onClick={this.handleClick2}>{this.state.Part1}</button>
            <p>&#8594;</p>
            <button onClick={this.handleClick3}>{this.state.Part2}</button>
            <p>&#8594;</p>
            <button onClick={this.handleClick4}>{this.state.Part3}</button>
          </div>
          <div id='component'  style={{display : "none"}}>
          {this.state.component}
          </div>
         </div>
         <div id={styles.footeredu}>
         < Footer  />    
         </div>      
        </>
    )
}}