import Table from '../table'
import styles from '/styles/Home.module.css'
import { items } from "/data.json"
import React from 'react'
import { useState, useEffect } from 'react'

export default function Landing({idioma}) {



    const [ titulo, setitulo] = useState ("KEY DATA FOR MAKING INVESTMENT DECISIONS")  


    useEffect(()=> {
            
      if ( idioma == "English") {
        setitulo("KEY DATA FOR MAKING INVESTMENT DECISIONS")

      } else {
        setitulo("DATOS CLAVES PARA LA TOMA DE DECISIONES DE INVERSIÓN")
      }
      
      
       
    }) 




    const {data} = items;

    return (
        <>
         <div className={styles.landing}  id={styles.main}  >
            <h1>{titulo}</h1>
            < Table idioma={idioma} />
            <div className={styles.acciones}>
            {data.map( data =>
                <div key={ data.id} className={styles.share}>
                    <h2>{data.nombre}</h2>
                    <div className={styles.fundamentals}>
                        <p className={styles.per}>PER: <span>{data.per}</span> </p>
                        <p className={styles.pvl}>P/VL: <span>{data.pvl}</span></p>
                        <p className={styles.roe}>ROE: <span>{data.roe}</span></p>
                        <p className={styles.yield}>YIELD: <span>{data.yield}</span></p>
                        <p className={styles.ydt}>YTD: <span>{data.ytd}</span></p>
                    </div>
                </div>
                  )}
             </div>
        </div>  
    </>
    )
}