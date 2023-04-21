import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Bread5 from './bread5'
import Footer from '../footer'
import Contacto from './contacto'


export default function Home() {
  return (
    <>
      <Head>
        <title>Acciones Bolsa de Valores de Colombia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=DM+Sans:wght@500&family=Delicious+Handrawn&family=Inter:wght@200;600;700;900&family=League+Spartan:wght@900&family=Roboto+Condensed&family=Rubik&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/068ec41cf0.js" crossorigin="anonymous"></script>
      </Head>
      <main className={styles.main}>
        < Bread5 />
        < Contacto />
      </main>
      <div id={styles.footercontact}>
         < Footer />    
     </div>    
    </>
  )
}