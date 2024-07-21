import styles from '/styles/Home.module.css'
import React from 'react'
import { useState, useEffect } from 'react'


export default function Contacto({idioma}) {



    const [ titulo, setitulo] = useState ("CONTACT ME")  
    const [ nombre, setNombre] = useState ("Your Name")
    const [ mail, setMail] = useState ("Your email")
    const [ mensaje, setMensaje] = useState ("Message")
    const [ enviar, setEnvio] = useState ("SEND")


    useEffect(()=> {
            
      if ( idioma == "English") {

        setitulo("CONTACT ME")
        setNombre("Your Name")
        setMail("Your email")
        setMensaje("Message")
        setEnvio("SEND")


      } else {

        setitulo("CONTÁCTAME")
        setNombre("Tu Nombre")
        setMail("Tu Email")
        setMensaje("Mensaje")
        setEnvio("ENVIAR")

      }
      
      
       
    }) 


    return (
        <>
          <div className={styles.contactame}>
          <h1>{titulo}</h1>  
          <div className={styles.contact} id="contac">
             <div className={styles.boton}>
                <div className={styles.btn2}>
                    <button><i class="fa-solid fa-envelope"></i></button>
                    <p>jucaob10@hotmail.com</p>
                </div>
                <div className={styles.btn3}>
                    <button><i class="fa-solid fa-location-pin"></i></button>
                    <p>Ibagué - Colombia</p>
                </div>
             </div>
             <div className={styles.form}>
                <form action="https://formspree.io/f/xdovngyl" method="post"  id="formsg">
                    <input name="contact" type="text" onfocus="this.value=' '" placeholder={nombre} required />
                    <input name="contact" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}" onfocus="this.value=' '" placeholder={mail} required />
                    <textarea name="contact" id={styles.msg} form="formsg" type="text" onfocus="this.value=' '" placeholder={mensaje} required></textarea>
                    <input name="contact" pattern=".*\S.{20,}.*"  id={styles.sub} type="submit"  value={enviar} required />
                </form> 
             </div>
        </div>
        </div>
     </>
    )
}