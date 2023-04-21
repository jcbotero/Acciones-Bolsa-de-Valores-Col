import styles from '/styles/Home.module.css'
import { inversiones } from "/inversiones.json"
import React from 'react'



export default function Table() {

    const info = inversiones;

    return (
        <>
         <div className={styles.table}>
            <table>
                <thead className={styles.ttitulo}>
                    <tr>
                       <th colspan={2}>
                         <h2>MONITOREA TUS POSIBILIDADES DE INVERSIÓN</h2>
                       </th>
                    </tr>
                    <tr>
                       <th>
                         <h2>INDICADOR</h2>
                       </th>
                       <th>
                         <h2>RENTABILIDAD</h2>
                       </th>
                    </tr>
                </thead> 
                <tbody className={styles.tbody}>   
                    <tr className={styles.celda}>
                        <td>COLCAP</td>
                        <td><span>{info.colcap}</span> (Año corrido)</td>
                    </tr>
                    <tr>
                        <td>TES Tasa fija 2026</td>
                        <td><span>{info.tes}</span></td>
                    </tr>
                    <tr  className={styles.celda}>
                        <td>DÓLAR</td>
                        <td><span>{info.dolarvalor} -</span><span>   ({info.dólar})</span>  (Año corrido)</td>
                     </tr>
                     <tr>
                        <td>S&P 500</td>
                        <td><span>{info.sp}</span> (Año corrido)</td>
                    </tr>
                     <tr className={styles.celda}>
                        <td>CDT - 360 DÍAS</td>
                        <td><span>{info.cdt}</span> (Promedio bancos)</td>
                    </tr>
                 </tbody>      
             </table>
            </div>
        </>
    )
}