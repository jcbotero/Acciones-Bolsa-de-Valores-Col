import styles from '/styles/Home.module.css'
import React from 'react'
import { useEffect, useState } from 'react'



export default function Intro({lenguague}) {




    const [ titulo, setT] = useState ("Why is it important to learn how to invest in the stock market?") 
    const [ p1, setP1] = useState ("The world of stock market investments can be a false step that frustrates our expectations when entering it, if we do not have the appropriate tools that allow us to access this ocean of values ​​that surrounds us.") 
    const [ p2, setP2] = useState ("I firmly believe that it is worth knowing and educating yourself on stock market investment issues. We make this statement addressing it both to people who want to dedicate themselves fully to trading stock assets (such as stocks), and to those who seek to obtain a return on their savings, through third-party advice.") 
    const [ p3, setP3] = useState ("We invite you to immerse yourself in this exciting financial world, allowing us to act as your access bridge. If you have any questions, please do not hesitate to contact us.") 
    const [ last, setLast] = useState ("“What would life be if we didn't have the courage to try something new?”") 
  
    
    useEffect(()=> {
            
      if ( lenguague ==  "English") {

        setT("Why is it important to learn how to invest in the stock market?")
        setP1("The world of stock market investments can be a false step that frustrates our expectations when entering it, if we do not have the appropriate tools that allow us to access this ocean of values ​​that surrounds us.")
        setP2("I firmly believe that it is worth knowing and educating yourself on stock market investment issues. We make this statement addressing it both to people who want to dedicate themselves fully to trading stock assets (such as stocks), and to those who seek to obtain a return on their savings, through third-party advice.")  
        setP3("We invite you to immerse yourself in this exciting financial world, allowing us to act as your access bridge. If you have any questions, please do not hesitate to contact us.")
        setLast("“What would life be if we didn't have the courage to try something new?”")


      }  else {

        setT("¿Por qué es importante aprender a invertir en bolsa?")
        setP1("El mundo de las inversiones en bolsa, puede llegar a ser un paso en falso que frustre nuestras expectativas al ingresar a él, si no contamos con las adecuadas herramientas que nos permitan acceder a este océano de valores que nos rodea.")
        setP2("Creo firmemente que vale la pena conocer y educarse en temas de inversión bursátil. Esta afirmación la hacemos dirigiéndola tanto para las personas que se quieren dedicar de lleno a la negociación de activos bursátiles (como las acciones), como para aquellas que buscan obtener una rentabilidad a sus ahorros, mediante la asesoría de terceros.")  
        setP3("Los invitamos a que se sumerjan en este apasionante mundo financiero, permitiéndonos obrar como su puente de acceso. Ante cualquier inquietud, por favor, no dude en contactarnos.")
        setLast("“¿Qué sería de la vida, si no tuviéramos el valor de intentar algo nuevo?”")

      }
           
    }) 


    return (
        <>
         <div className={styles.edutext}>
             <h1>{titulo}</h1>
             <p>{p1} </p>
             <p>{p2}</p>
             <p>{p3}</p>
             <h2>{last}<span>(Vincent Van Gogh)</span></h2>
         </div>          
        </>
    )
}