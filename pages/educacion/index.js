import Footer from '../footer'
import Bread2 from './bread2'
import Edu1 from './educacion1'
import Edu2 from './educacion2'
import Edu3 from './educacion3'
import Intro from './intro'
import styles from '/styles/Home.module.css'
import React from 'react'
import Head from 'next/head'


export default class Bread extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      component :  < Intro  />,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  };
  
  handleClick() {
    this.setState({ 
      component :  < Intro />,
   });
  }
   handleClick2() {
    this.setState({ 
      component :  < Edu1 />
   })
  }
   handleClick3() {
    this.setState({ 
      component :  < Edu2 />
   })}
   handleClick4() {
    this.setState({ 
      component :  < Edu3 />
   })}
  
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
          < Bread2/>
          <div className={styles.edubuttons}>
            <button onClick={this.handleClick}>INTRODUCCIÓN</button>
            <p>&#8594;</p>
            <button onClick={this.handleClick2}>PARTE I</button>
            <p>&#8594;</p>
            <button onClick={this.handleClick3}>PARTE II</button>
            <p>&#8594;</p>
            <button onClick={this.handleClick4}>PARTE III</button>
          </div>
          {this.state.component}
         </div>
         <div id={styles.footeredu}>
         < Footer />    
         </div>      
        </>
    )
}}