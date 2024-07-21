import styles from '/styles/Home.module.css'
import React from 'react'
import { useState, useEffect } from 'react'


export default function Bread2({lenguague}) {

const [ education, setEducacionW] = useState ("EDUCATION")
const [ empresas, setEmpresasW] = useState ("COMPANIES")
const [  juego, setJuegoW] = useState ("GAME")
const [ contacto, setContactoW] = useState ("CONTACT")





function menu() {
    document.getElementById("bread").style.display = "block"
    document.getElementById("close").style.display = "block"
}

function close() {
    document.getElementById("bread").style.display = "none"
    document.getElementById("close").style.display = "none"
    
}

useEffect(()=> {
            
    if ( lenguague == "English") {

    setEducacionW("EDUCATION")
    setEmpresasW("COMPANIES")
    setJuegoW("GAME")
    setContactoW("CONTACT")
   
} else {

    setEducacionW("EDUCACIÓN")
    setEmpresasW("COMPAÑIAS")
    setJuegoW("JUEGO")
    setContactoW("CONTACTO")

}})

    return (
        <>
         <div className={styles.bread}>
            <div id='bread' className={styles.breadp}>
                <a href='/'> HOME</a> 
                <a href='/educacion' className={styles.home} >{education}</a> 
                <a href='/empresas' >{empresas}</a> 
                <a href='https://stock-investment-challenge.vercel.app/' >{juego}</a> 
                <a href='/contacto'>{contacto}</a>  
            </div>
            <div className={styles.mobile}>
                <img className={styles.menu} onClick={menu} src="/shared/icon-hamburger.svg" alt="menu" ></img>
                <img id='close' onClick={close} className={styles.close} src="/shared/icon-close.svg" alt="close" ></img>
            </div> 
         </div>          
        </>
    )
}