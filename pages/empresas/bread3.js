import styles from '/styles/Home.module.css'
import React from 'react'
import { useState, useffec } from 'react'


export default function Bread3(props) {

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
    

    
function english() {
    setEducacionW("EDUCATION")
    setEmpresasW("COMPANIES")
    setJuegoW("GAME")
    setContactoW("CONTACT")
    props.lenguague("English") // aqui estoy enviando una prop al parent , cuando el usuario le da click a la bandera de usa
}


function espanish() {
    setEducacionW("EDUCACIÓN")
    setEmpresasW("COMPAÑIAS")
    setJuegoW("JUEGO")
    setContactoW("CONTACTO")
    props.lenguague("Spanish") // aqui estoy enviando una prop al parent , cuando el usuario le da click a la bandera de España
}

    return (
        <>
         <div className={styles.bread}>
                <div className={styles.flags}>
                  <img onClick={english} src='./american.jpg' ></img>
                  <img onClick={espanish} src='./spanish.jfif' ></img>
                </div>
                <div id='bread' className={styles.breadp}>
                    <a href='/'> HOME</a> 
                    <a href='/educacion'>{education}</a> 
                    <a href='/empresas' className={styles.home} >{empresas}</a> 
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