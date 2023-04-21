
    import Head from "next/head";
    import Bread3 from "./bread3";
    import Footer from "../footer";
    import ResponsiveCarousel from "./Responsive";
    import styles from '/styles/Home.module.css'


    export default function Home() {
      return (
        <div>
          <Head>
            <title>Next.js Carousels</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=DM+Sans:wght@500&family=Delicious+Handrawn&family=Inter:wght@200;600;700;900&family=League+Spartan:wght@900&family=Roboto+Condensed&family=Rubik&display=swap" rel="stylesheet"/>
            <script src="https://kit.fontawesome.com/068ec41cf0.js" crossorigin="anonymous"></script>
          </Head>
          <main className={styles.main}>
            <Bread3 />
            <h1>CONOCE LAS EMPRESAS QUE COTIZAN EN LA BOLSA COLOMBIANA</h1>
            <ResponsiveCarousel  />
          </main>
          <div className={styles.footerempre}>
            < Footer />    
           </div>   
        </div>
      );
    }