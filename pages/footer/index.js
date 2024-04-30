import styles from '/styles/Home.module.css'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Footer() {
  
    return (
        <>
         <div className={styles.footer} >
             <div>
                <a href='https://github.com/jcbotero' target='_blank'><button><FaGithub /></button></a> 
                <a href= "https://www.linkedin.com/in/juan-camilo-botero-gutierrez-31009559/" target='_blank'><button>< FaLinkedin /></button></a> 
                <a href = "https://www.instagram.com/jucaob10/" target='_blank'><button>< FaInstagram /></button></a>
            </div>
            <p>“No podemos dirigir el viento, solo podemos ajustar las velas.” <span>Dolly Parton. </span></p>
            <p>Developed by <span>Juan Camilo Botero Gutiérrez.</span></p>
            <p>© copyright 2022.Todos los derechos reservados.</p>
            <p><span>Disclaimer:</span> La información aquí expuesta es de caracter educativa, y no constituye ningún tipo de recomenación de inverisión</p>
          </div>
        </>
    )
}