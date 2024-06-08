import styles from '/styles/Home.module.css'
import React from 'react'



export default function Bread5() {

    
function menu() {
    document.getElementById("bread").style.display = "block"
    document.getElementById("close").style.display = "block"
}

function close() {
    document.getElementById("bread").style.display = "none"
    document.getElementById("close").style.display = "none"
    
}

    return (
        <>
         <div className={styles.bread}>
            <div id='bread' className={styles.breadp}>
                <a href='/'> HOME</a> 
                <a href='/educacion'>EDUCACION</a> 
                <a href='/empresas' >EMPRESAS</a> 
                <a href='https://stock-investment-challenge.vercel.app/' >JUEGO</a> 
                <a href='/contacto' className={styles.home}>CONTACTO</a> 
            </div>
            <div className={styles.mobile}>
                <img className={styles.menu} onClick={menu} src="/shared/icon-hamburger.svg" alt="menu" ></img>
                <img id='close' onClick={close} className={styles.close} src="/shared/icon-close.svg" alt="close" ></img>
            </div> 
         </div>          
        </>
    )
}