import styles from '/styles/Home.module.css'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from 'react'

export default function Footer({idioma}) {
  
    
    const [ p1, setP1] = useState ("“We can't direct the wind, we can only adjust the sails.”")  
    const [ p2, setP2] = useState ("Developed by")  
    const [ p3, setP3] = useState ("© copyright 2024. All rights reserved.")  
    const [ p4, setP4] = useState ("The information presented here is of an educational nature, and does not constitute any type of investment recommendation.")  




  
useEffect(()=> {
        
           
        if ( idioma == "English") {
            setP1("“We can't direct the wind, we can only adjust the sails.”")
            setP2("Developed by")
            setP3("© copyright 2024. All rights reserved.")
            setP4("The information presented here is of an educational nature, and does not constitute any type of investment recommendation.")
  
        } else {
          
            setP1("“No podemos dirigir el viento, solo podemos ajustar las velas.”")
            setP2("Hecho por")
            setP3("© copyright 2024.Todos los derechos reservados.")
            setP4("La información aquí expuesta es de caracter educativa, y no constituye ningún tipo de recomenación de inversión")
        }
         
   
}) 


    return (
        <>
         <div className={styles.footer} >
             <div>
                <a href='https://github.com/jcbotero' target='_blank'><button><FaGithub /></button></a> 
                <a href= "https://www.linkedin.com/in/juan-camilo-botero-gutierrez-31009559/" target='_blank'><button>< FaLinkedin /></button></a> 
                <a href = "https://www.instagram.com/jucaob10/" target='_blank'><button>< FaInstagram /></button></a>
            </div>
            <p>{p1} <span>Dolly Parton. </span></p>
            <p>{p2} <span>Juan Camilo Botero Gutiérrez.</span></p>
            <p>{p3}</p>
            <p><span>Disclaimer:</span>{p4}</p>
          </div>
        </>
    )
}