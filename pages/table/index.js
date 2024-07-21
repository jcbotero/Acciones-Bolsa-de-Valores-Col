import styles from '/styles/Home.module.css'
import { inversiones } from "/inversiones.json"
import React from 'react'
import { useState, useEffect } from 'react'



export default function Table({idioma}) {



    const [ titulo, setitulo] = useState ("LOOK AT YOUR INVESTMENT POSSIBILITIES")  
    const [ indicador, setIndicador] = useState ("INDICATOR")  
    const [  rentabilidad , setRentablidad] = useState ("PROFITABILITY")  
    const [ AñoCorr, setAñocorr] = useState ("YTD")  
    const [ promedioB, setProme] = useState ("Average banks")  



    useEffect(()=> {
            
        if ( idioma == "English") {
          
            setitulo("LOOK AT YOUR INVESTMENT POSSIBILITIES")
            setIndicador("INDICATOR")
            setRentablidad("PROFITABILITY")
            setAñocorr("YTD")
            setProme("Average banks")
  
        } else {
          
            setitulo("OBSERVA TUS POSIBILIDADES DE INVERSIÓN")
            setIndicador("INDICADOR")
            setRentablidad("RENTABILIDAD")
            setAñocorr("Año corrido")
            setProme("Promedio bancos")
        }
        
        
         
      }) 




    const info = inversiones;

    return (
        <>
         <div className={styles.table}>
            <table>
                <thead className={styles.ttitulo}>
                    <tr>
                       <th colspan={2}>
                         <h2>{titulo}</h2>
                       </th>
                    </tr>
                    <tr>
                       <th>
                         <h2>{indicador}</h2>
                       </th>
                       <th>
                         <h2>{rentabilidad}</h2>
                       </th>
                    </tr>
                </thead> 
                <tbody className={styles.tbody}>   
                    <tr className={styles.celda}>
                        <td>COLCAP</td>
                        <td><span>{info.colcap}</span> ({AñoCorr})</td>
                    </tr>
                    <tr>
                        <td>TES Tasa fija 2026</td>
                        <td><span>{info.tes}</span></td>
                    </tr>
                    <tr  className={styles.celda}>
                        <td>DÓLAR</td>
                        <td><span>{info.dolarvalor} -</span><span>   ({info.dólar})</span>  ({AñoCorr})</td>
                     </tr>
                     <tr>
                        <td>S&P 500</td>
                        <td><span>{info.sp}</span> ({AñoCorr})</td>
                    </tr>
                     <tr className={styles.celda}>
                        <td>CDT - 360 DÍAS</td>
                        <td><span>{info.cdt}</span> ({promedioB})</td>
                    </tr>
                 </tbody>      
             </table>
            </div>
        </>
    )
}