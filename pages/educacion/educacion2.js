import styles from '/styles/Home.module.css'
import React from 'react'
import { useEffect, useState } from 'react'


export default function Edu2({lenguague}) {


    const [ titulo, setT] = useState ("Fundamental Analysis") 
    const [ p1, setP1] = useState ("When we buy a share, it is clear that we are becoming owners of a company. By investing in it and becoming shareholders of the company (even if it is in a very small part), we are trusting in the company, and therefore we hope that its evolution will be positive in aspects such as: income generation, profit growth, increase in market participation, asset strengthening, etc, etc, etc….") 
    const [ p2, setP2] = useState ("Fundamental analysis aims to act as a bridge between our resources available to invest and the company that we must choose to become one of its shareholders (owners). As there are multiple companies to invest in the stock market, based on fundamental analysis, we will be able to choose which of them our investment could have a more profitable end for our money.") 
    const [ titulo2, setT2] = useState ("What are the tools used in fundamental analysis?") 
    const [ p3, setP3] = useState ("First and foremost, a fundamental investor is someone who remains connected to the economic world around them. We cannot expect to invest in a company because of its fundamental situation, if we do not know what is happening with the global economy, constantly reading economic newspapers that give us a perspective of the economic and financial situation.") 
    const [ p4, setP4] = useState ("From this, there are many tools that have been generated, and that are used by investors, traders and economic analysts to know the situation and expectations of a company, in order to find its value. Next, we will see some of them:") 
    const [ titulo3, setT3] = useState ("Financial statements") 
    const [ p5, setP5] = useState ("In the same way that an adventurer uses a map to find his way, the fundamental analyst uses financial statements to focus on the health of the company he analyzes. Financial statements are reports that listed companies are required to make public (In our country they are revealed every 3 months), with the objective of informing their shareholders and other interest groups about the financial health of the organization.") 
    const [ p6, setP6] = useState ("These reports are of supreme relevance when analyzing a company, since they let us know, in figures or weights, how well the organization is carrying out its tasks. This information is used by managers and business owners in order to make decisions about the company (e.g., changing short-term debt for long-term debt to improve cash flow), but we as investors are going to use This information is used as a guide to know whether or not we should invest in the company.") 
    const [ span, setSpan] = useState("What should we analyze the financial statements?") 
    const [ p7, setP7] = useState ("Like all information based on numbers, financial statements differ in their analysis and interpretations, depending on the person who prepares them. However, we can highlight some accounts as more relevant when observing these numbers. For an investor, it is relevant to know the company's operating income, its profits, and the evolution of its assets, liabilities and equity.") 
    const [ span2, setSpan2] = useState("It is key to compare the evolution of the accounts with their historical records") 
    const [ p8, setP8] = useState (". A successful investor does not just stick with the press headlines, which often simplify the analysis by comparing the results of a company with its immediately previous period. This information is sometimes biased and lacks depth. Therefore, it is important to keep track of the financial statements of the companies you analyze, in order to make your own comparisons.") 
    const [ titulo4, setT4] = useState ("Stock market multiples") 
    const [ p9, setP9] = useState ("A common and globalized practice in the stock markets to fundamentally analyze our actions are stock market multiples. These are ratios or numerical values, which are constructed from the company's financial information, and which allow us to know whether a stock is trading cheap or expensive, when comparing it with itself or with others in the stock market.") 
    const [ p10, setP10] = useState ("In the following table we are going to learn about some of the most used stock market multiples and how they can help us make investment decisions:") 
    const [ span3, setSpan3] = useState("Relevant: It is important to keep in mind that stock market multiples do not tell us much if we try to interpret them based on a single piece of information. The most appropriate thing is to have a historical record of the company's historical multiples, as well as those of other companies in its economic sector, in order to be able to compare the different information that they do not provide, and from From this, take a strengthened source in our investment decisions. ") 
    const [ titulo5, setT5] = useState ("Macroeconomic Fundamental Analysis") 
    const [ p12, setP12] = useState ("As we talked about at the beginning, a good fundamentalist not only knows the financial reality of his company, but is also duly informed about the economic context of the country where it operates.")
    const [ p13, setP13] = useState ("Stock exchanges around the world are increasingly connected. The evolution of technologies, as well as the globalization phenomenon, have made the movement of money from one country to another increasingly easier and more dynamic. In this way, it is imperative to know that many investors around the world buy and sell shares (and other assets), not in a single exchange like our BVC, but in the entire world market. These investors, often represented by large funds, before choosing the country where they invest, carry out an adequate study on its current political, economic and social situation.")
    const [ p14, setP14] = useState ("On the other hand, if we have a robust idea of ​​what is happening in the country where we operate, this information offers us great help to determine, (among many other things) if we are facing an expanding economy, or a country with a great political risk.")
    const [ p15, setP15] = useState ("What are the most important macroeconomic data? In reality, they largely depend on each country, and, above all, on the economic situation it is going through. But some of them are:")
    const [ p16, setP16] = useState ("GDP: Gross domestic product.")
    const [ p17, setP17] = useState ("Unemployment rate.")
    const [ p18, setP18] = useState ("Industrial production.")
    const [ p19, setP19] = useState ("Monetary policy (interest rates).")
    const [ span4, setSpan4] = useState("Annex: Economic calendar. ") 
    const [ p20, setP20] = useState ("This is a tool widely consulted by investors and traders every day. Through the economic calendar, which can be viewed for free on a large number of websites, we can know which are the most important economic figures of the day, what is their forecast, and what is their result. In this way, confirming not only the global economic evolution, but also how the markets react to said data.") 
    const [ titulo6, setT6] = useState ("“You have to study a lot to know little.”") 



    useEffect(()=> {
            
        if ( lenguague ==  "English") {
  
            setT("Fundamental Analysis") 
            setP1("When we buy a share, it is clear that we are becoming owners of a company. By investing in it and becoming shareholders of the company (even if it is in a very small part), we are trusting in the company, and therefore we hope that its evolution will be positive in aspects such as: income generation, profit growth, increase in market participation, asset strengthening, etc, etc, etc….") 
            setP2("Fundamental analysis aims to act as a bridge between our resources available to invest and the company that we must choose to become one of its shareholders (owners). As there are multiple companies to invest in the stock market, based on fundamental analysis, we will be able to choose which of them our investment could have a more profitable end for our money.") 
            setT2("What are the tools used in fundamental analysis?") 
            setP3("First and foremost, a fundamental investor is someone who remains connected to the economic world around them. We cannot expect to invest in a company because of its fundamental situation, if we do not know what is happening with the global economy, constantly reading economic newspapers that give us a perspective of the economic and financial situation.") 
            setP4("From this, there are many tools that have been generated, and that are used by investors, traders and economic analysts to know the situation and expectations of a company, in order to find its value. Next, we will see some of them:") 
            setT3("Financial statements") 
            setP5("In the same way that an adventurer uses a map to find his way, the fundamental analyst uses financial statements to focus on the health of the company he analyzes. Financial statements are reports that listed companies are required to make public (In our country they are revealed every 3 months), with the objective of informing their shareholders and other interest groups about the financial health of the organization.") 
            setP6("These reports are of supreme relevance when analyzing a company, since they let us know, in figures or weights, how well the organization is carrying out its tasks. This information is used by managers and business owners in order to make decisions about the company (e.g., changing short-term debt for long-term debt to improve cash flow), but we as investors are going to use This information is used as a guide to know whether or not we should invest in the company.") 
            setSpan("What should we analyze the financial statements?") 
            setP7("Like all information based on numbers, financial statements differ in their analysis and interpretations, depending on the person who prepares them. However, we can highlight some accounts as more relevant when observing these numbers. For an investor, it is relevant to know the company's operating income, its profits, and the evolution of its assets, liabilities and equity.") 
            setSpan2("It is key to compare the evolution of the accounts with their historical records") 
            setP8(". A successful investor does not just stick with the press headlines, which often simplify the analysis by comparing the results of a company with its immediately previous period. This information is sometimes biased and lacks depth. Therefore, it is important to keep track of the financial statements of the companies you analyze, in order to make your own comparisons.") 
            setT4("Stock market multiples") 
            setP9("A common and globalized practice in the stock markets to fundamentally analyze our actions are stock market multiples. These are ratios or numerical values, which are constructed from the company's financial information, and which allow us to know whether a stock is trading cheap or expensive, when comparing it with itself or with others in the stock market.") 
            setP10("In the following table we are going to learn about some of the most used stock market multiples and how they can help us make investment decisions:") 
            setSpan3("Relevant: It is important to keep in mind that stock market multiples do not tell us much if we try to interpret them based on a single piece of information. The most appropriate thing is to have a historical record of the company's historical multiples, as well as those of other companies in its economic sector, in order to be able to compare the different information that they do not provide, and from From this, take a strengthened source in our investment decisions.") 
            
            setT5("Macroeconomic Fundamental Analysis") 
            setP12("As we talked about at the beginning, a good fundamentalist not only knows the financial reality of his company, but is also duly informed about the economic context of the country where it operates.")
            setP13("Stock exchanges around the world are increasingly connected. The evolution of technologies, as well as the globalization phenomenon, have made the movement of money from one country to another increasingly easier and more dynamic. In this way, it is imperative to know that many investors around the world buy and sell shares (and other assets), not in a single exchange like our BVC, but in the entire world market. These investors, often represented by large funds, before choosing the country where they invest, carry out an adequate study on its current political, economic and social situation.")
            setP14("On the other hand, if we have a robust idea of ​​what is happening in the country where we operate, this information offers us great help to determine, (among many other things) if we are facing an expanding economy, or a country with a great political risk.")
            setP15("What are the most important macroeconomic data? In reality, they largely depend on each country, and, above all, on the economic situation it is going through. But some of them are:")
            setP16("GDP: Gross domestic product.")
            setP17("Unemployment rate.")
            setP18("Industrial production.")
            setP19("Monetary policy (interest rates).")
            setSpan4("Annex: Economic calendar. ") 
            setP20("This is a tool widely consulted by investors and traders every day. Through the economic calendar, which can be viewed for free on a large number of websites, we can know which are the most important economic figures of the day, what is their forecast, and what is their result. In this way, confirming not only the global economic evolution, but also how the markets react to said data.") 
            setT6("“You have to study a lot to know little.”") 
        
        }  else {
            
            setT("Análisis fundamental") 
            setP1("Cuando nosotros compramos una acción, es claro que nos estamos convirtiendo en dueños de una empresa. Al invertir en ella y hacernos accionistas de la compañía (aunque sea en una muy pequeña parte), estamos confiando en la empresa, y por tanto esperamos que su evolución sea positiva en aspectos como: generación de ingresos, crecimiento de utilidades, incremento en la participación de mercado, fortalecimiento patrimonial, etc, etc, etc….") 
            setP2("El análisis fundamental pretende obrar como un puente, entre nuestros recursos disponibles para invertir, y la compañía que debemos escoger para convertirnos en uno de sus accionistas (dueños). Como existen múltiples compañías para invertir en bolsa, a partir de análisis fundamental, vamos a poder escoger en cuales de ellas nuestra inversión podría tener un final más rentable para nuestro dinero.") 
            setT2("¿Cuáles son las herramientas utilizadas en el análisis fundamental?") 
            setP3("Ante todo, un inversionista fundamental, es alguien que permanece conectado con el mundo económico que lo rodea. No podemos pretender invertir en una empresa por su situación fundamental, sino conocemos que está pasando con la economía global, leyendo constantemente diarios económicos que nos den una perspectiva de la situación económica y financiera") 
            setP4("A partir de esto son muchas las herramientas que se han generado, y que son utilizadas por inversores, traders y analistas económicos para conocer la situación y expectativas de una empresa, para de esta manera hallar su valor. A continuación, veremos algunas de ellas:") 
            setT3("Los estados financieros") 
            setP5("De la misma forma que un aventurero utiliza un mapa para encontrar ubicarse, el analista fundamental recurre a los estados financieros para focalizarse en la salud de la empresa que analiza. Los estados financieros son informes que están obligados a hacer públicos las empresas inscritas en bolsa (En nuestro país son revelados cada 3 meses), con el objetivo de informar a sus accionistas y demás grupos de interés, sobre la salud financiera de la organización.") 
            setP6("Estos informes son de una relevancia suprema a la hora de analizar una empresa, puesto que nos dan a conocer en cifras o pesos, que tan bien la organización está cumpliendo con sus labores. Esta información es utilizada por los directivos y dueños de las empresas con el fin de tomar decisiones sobre la compañía (ej, cambiar deuda de corto plazo por una de largo plazo para mejorar el flujo de caja), pero nosotros como inversores, vamos a utilizar esta información como una guía, para saber si debemos invertir o no en la compañía.") 
            setSpan("¿Qué debemos analizarle a los Estados financieros?") 
            setP7("Como toda información basada en números, los estados financieros difieren en sus análisis e interpretaciones, dependiendo de la persona que los haga. Sin embargo, podemos subrayar algunas cuentas como más relevantes a la hora de observar estos números. Para un inversor, es relevante conocer los ingresos operacionales de la compañía, sus utilidades, y la evolución de su activo, pasivo y patrimonio.") 
            setSpan2("Es clave el comparar la evolución de las cuentas con sus registros históricos") 
            setP8(". Un inversor exitoso no se queda solamente con los titulares de prensa que en muchas ocasiones simplifican los análisis al comparar los resultados de una compañía con su periodo inmediatamente anterior. Esta información es en ocasiones sesgada y carente de profundidad. Por lo tanto, es importante, llevar un registro de los estados financieros de las compañías que analiza, con el fin de hacer sus propias comparaciones.") 
            setT4("Múltiplos bursátiles") 
            setP9("Una práctica común y globalizada en los mercados de valores para analizar fundamentalmente nuestras acciones son los múltiplos bursátiles. Estas son razones o valores numéricos, que se construyen a partir de la información financiera de la empresa, y que nos permiten conocer si una acción cotiza “barata” o “cara”, al compararla con ella misma o con otras del mercado accionario.") 
            setP10("En la siguiente tabla vamos a conocer algunos de los múltiplos bursátiles más utilizados y como nos pueden ayudar a tomar decisiones de inversión:") 
            setSpan3("Relevante: Es importante tener en cuenta que los múltiplos bursátiles no nos dicen mucho si tratamos de interpretarlos a raíz de un solo dato. Lo más adecuado es tener un registro histórico de los múltiplos históricos de la compañía</span>, así como también los de las demás empresas del sector económico de la misma, con el fin de poder comparar la diferente información que no dan, y a partir de esto, tomar una fuente fortalecida en nuestras decisiones de inversiones.") 
            
            setT5("Análisis Fundamental Macroeconómico") 
            setP12("Como hablamos al inicio, un buen fundamentalista no solo conoce la realidad financiera de su compañía, sino que, además, está debidamente informado sobre el contexto económico del país donde opera la misma.")
            setP13("Las bolsas de valores alrededor del mundo, cada vez están más conectadas. La evolución de las tecnologías, al igual que el fenómeno globalizador, han generado que cada vez sea más fácil y dinámico, el movimiento de dinero de un país a otro. De esta manera, es imperativo saber que muchos inversionistas alrededor del mundo, compran y venden acciones (y otros activos), no es una sola bolsa como nuestra BVC, sino en todo el mercado mundial. Estos inversionistas, muchas veces representados por grandes fondos, antes de elegir el país donde invierten, realizan un adecuado estudio sobre su actualidad, política, económica y social. ")
            setP14("Por otro lado, si nosotros tenemos una idea robusta de   lo que está pasando en el país donde operamos, esta información nos ofrece una gran ayuda para determinar, (entre muchas otras cosas) si estamos ante una economía en expansión, o ante un país con un gran riesgo político.")
            setP15("¿Cuáles son los datos macroeconómicos más importantes? En realidad, en gran medida dependen de cada país, y, sobre todo, de la coyuntura económica que esté atravesando el mismo. Pero algunos de ellos son:")
            setP16("PIB: Producto interno bruto.")
            setP17("Tasa de Desempleo.")
            setP18("Producción industrial.")
            setP19("Política monetaria (tasas de interés).")
            setSpan4("Anexo: Calendario económico. ") 
            setP20("Esta es una herramienta muy consultada por los inversionistas y traders día a día. Mediante el calendario económico, que se puede observar gratis en una gran cantidad de sitios web, podemos conocer cuáles son las cifras económicas más importantes del día, cuál es su pronóstico, y cual su resultado. Constatando de esta manera, no solo la evolución económica mundial, sino cómo reaccionan los mercados a dichos datos. ") 
            setT6("“Hay que estudiar mucho para saber poco.”") 
        }
             
      }) 



    return (
        <>
         <div className={styles.edutext}>
             <h1>{titulo}</h1>
             <img className={styles.imgedu} src="/edu21.jpg" alt="edu21" />
             <p>{p1}</p>
             <p>{p2}</p>
             <img className={styles.imgedu} src="/edu22.jpg" alt="edu22" />
             <h1>{titulo2}</h1>
             <div className={styles.anexo}>
                 <p>{p3}</p>
                 <img className={styles.imgedu} src="/edu23.jpg" alt="edu23" />
             </div>
             <p>{p4}</p>
             <h1>{titulo3}</h1>
             <p>{p5}</p>
             <p>{p6}</p>
             <div className={styles.anexo}>
                 <p> <span>{span}</span>{p7}</p>
                 <img className={styles.imgedu} src="/edu24.jpg" alt="edu24" />
             </div>
             <p> <span>{span2}</span>{p8}</p>
             <img className={styles.imgedu} src="/edu25.jpg" alt="edu25" />
             <h1>{titulo4}</h1>
             <img className={styles.imgedu} src="/edu26.jpg" alt="edu26" />
             <p>{p9}</p>
             <p>{p10}</p>
             <img className={styles.imgedu} src="/edu27.jpg" alt="edu27" />
             <img className={styles.imgedu} src="/edu28.jpg" alt="edu28" />
             <p><span>{span3}</span></p>
             <h1>{titulo5}</h1>
             <p>{p12}</p>
             <p>{p13} </p>
             <p>{p14}</p>
             <p>{p15}</p>
             <ol>
                <li>{p16}</li>
                <li>{p17}</li>
                <li>{p18}</li>
                <li>{p19}</li>
             </ol>
             <img id={styles.imgedul} src="/edu29.jpg" alt="edu29" />
             <p><span>{span4}</span>{p20} </p>
             <h2>{titulo6}<span>(MONTESQUIEU)</span></h2>
         </div>          
        </>
    )
}