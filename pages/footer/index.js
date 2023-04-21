import styles from '/styles/Home.module.css'

export default function Footer() {
  
    return (
        <>
         <div className={styles.footer} >
             <div>
                <a href='https://github.com/jcbotero' target='_blank'><button><i class="fa-brands fa-github"></i></button></a> 
                <a href= "https://www.linkedin.com/in/juan-camilo-botero-gutierrez-31009559/" target='_blank'><button><i class="fa-brands fa-linkedin"></i></button></a> 
                <a href = "https://www.instagram.com/jucaob10/" target='_blank'><button><i class="fa-brands fa-instagram"></i></button></a>
            </div>
            <p>“No podemos dirigir el viento, solo podemos ajustar las velas.” <span>Dolly Parton. </span></p>
            <p>Developed by <span>Juan Camilo Botero Gutiérrez.</span></p>
          </div>
        </>
    )
}