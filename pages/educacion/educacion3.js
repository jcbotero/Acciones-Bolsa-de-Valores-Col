import styles from '/styles/Home.module.css'
import React from 'react'
import { useEffect, useState } from 'react'


export default function Edu3({lenguague}) {

    
    const [ titulo, setT] = useState ("Technical analysis") 
    const [ p1, setP1] = useState ("And it was time for technical analysis. As we talked about in the previous sections, when I am going to choose where to channel my investment in the stock market (focusing on the issue of stocks), there are two main tools: Fundamental analysis (discussed previously) and technical analysis.") 
    const [ titulo2, setT2] = useState ("What is technical analysis about?") 
    const [ p2, setP2] = useState ("Simply and simply, it is the study of graphics. The technical analyst is one who, by studying the historical price of the asset, tries to predict what its future behavior will be. That is, when we invest using this tool, what we do is study how the historical price of our share has behaved, and then invest our money, trying to predict where the price will continue to move.") 
    const [ titulo3, setT3] = useState ("Features of technical analysis") 
    const [ p3, setP3] = useState ("Let's go a little more into detail...") 
    const [ span, setSpan] = useState("The asset price summarizes everything you need to know.") 
    const [ p4, setP4] = useState ("Technical analysts are great defenders of their work. For them, in the stock market world, there is a lot of inside information about companies and all the aspects that can affect their value on the stock market, which the general public does not know. For this reason, technicians maintain that those who do access this privileged information, use it for their own good before it becomes known to the public, and therefore, when the information is finally known, it has already been discounted in the price of the stock on the stock market. In this way they maintain,") 
    const [ span2, setSpan2] = useState("More than analyzing the fundamentals of a company, an investor or trader must analyze how the share price moves on the stock market as their true source of information.") 
   
    const [ span3, setSpan3] = useState("It handles a smaller amount of information than fundamental analysis.") 
    const [ p6, setP6] = useState ("Although clearly, to achieve a satisfactory level of technical analysis a lot of preparation and operational experience is needed, it is also true that technical analysis seeks to “make it easier” for the investor to make decisions. That is to say,") 
    const [ span4, setSpan4] = useState("It seeks for each of us to develop a simple and successful strategy based solely on graph analysis.") 
    const [ p7, setP7] = useState ("Something that differs from fundamental analysis, since the latter requires a deeper investigative level.") 
    const [ span5, setSpan5] = useState("The trend is your friend.") 
    const [ p8, setP8] = useState ("Stock prices move in trends. That is to say, at one time they rise, they fall, and at another time they remain in a lateral movement. Technical analysis offers us as investors tools to follow these movements. There is nothing more disastrous for invested money than betting on the opposite direction to which the market is heading.") 
    const [ span6, setSpan6] = useState("Stop Loss is rule number 1.") 
    const [ p9, setP9] = useState ("The stop loss (stop loss) is a very helpful tool for any investor. It is based on something simple, if we are wrong in our analysis, and the market does not show it this way with the movement of the price of our share, our duty is to immediately exit that investment. As technical analysis is based exclusively on graphs and does not intend to introduce fundamentals to your investment strategy, we can very easily become “blind” to very important news that affects the price of our investment. Therefore, keeping the above clear, it is always important to protect our capital from losing investments, selling said investment, when required.") 
    const [ span7, setSpan7] = useState("Management of emotions.") 
    const [ p10, setP10] = useState ("One of the most difficult aspects to develop in our lives as investors is the management of emotions. This is a decisive factor to achieve success in this business. It takes time, experience (and yes, money!!) to learn how to close a losing investment, or suppress the greed of a winning one. But once we learn to manage this aspect, we will have taken a giant step!") 
    const [ titulo4, setT4] = useState ("TECHNICAL ANALYSIS TOOLS") 
    const [ p11, setP11] = useState ("In the world of technical analysis, there are many tools (indicators, charts, oscillators), which, based mainly on the price movement and trading volume of the stock, try to predict where the stock will move. Let's look at one of them:") 
    const [ titulo5, setT5] = useState ("JAPANESE CANDLES") 
  
    const [ p12, setP12] = useState ("What are they?")
    const [ p13, setP13] = useState ("Japanese candles were an analysis tool that the Japanese used to try to predict what the future price of the goods they produced from their agricultural crops would be.")
    const [ p14, setP14] = useState ("How is a Japanese candlestick formed? Let's see this with the following example:")
    const [ p15, setP15] = useState ("Let's look at the graph above and focus for a moment on the first candle, that is, on the green bar in the upper right. Suppose that candle represents today's movement of Ecopetrol's stock.")
    const [ span8, setSpan8] = useState("How did that green candle form?") 
   
    const [ p16, setP16] = useState ("It's simple. The candle is divided into two parts, the body and the shadow. The body would be the green bar, and the shadow, the black “legs” that emerge from the top and bottom of the green body.")
    const [ p17, setP17] = useState ("The body represents to us what Ecopetrol's action changed on the day. For this example, we can infer that the stock started at a price of 4,800 and closed the day at 5,100. If we look at the graph, that is indeed the space that includes the green body of the candle. On the other hand, the shadow or legs show us prices that the stock reached during the day but that are not within its absolute variation. In our example, we see that the lower leg or leftover takes a value of 4,600, this means that most likely the Ecopetrol stock started the day at 4,800 and then fell to 4,600, to finally close at 5,100. As we can see, the stock started at 4,800 and closed at 5,100, but on the day it was trading at a minimum price of 4,600, which is what represents the lower shadow or leg.")
    const [ p18, setP18] = useState ("With the upper shadow it is something very similar. Surely at some point during the day Ecopetrol's stock was trading at a price of 5,200 but then it returned a little and closed at the aforementioned 5,100. That is, the upper leg shows us the maximum price that the stock reached, and the lower leg shows us the minimum price. Very easy.")
    const [ p19, setP19] = useState ("Now, when a stock closes higher (increased in price) its body is green as in the previous example. But when it closes lower (the price drops) its body turns red. In the red candles the shadows represent the same thing, they simply change in the sense that they tell us if the price closed higher or lower than the initial price.")
    const [ titulo6, setT6] = useState ("What are Japanese candles used for?") 
    
    const [ p20, setP20] = useState ("The candles try to illustrate what the sentiment is or where the strength of the market is. They show us whether the action, based on how it moved, is more likely to rise or fall in the following days.") 
    const [ span9, setSpan9] = useState("Let's look at the green candle at the bottom left for a moment.") 
    const [ p21, setP21] = useState ("As we can see, this candle is bullish (green body) and has no upper shadow. That is, the maximum price of the day is also the price at which the stock closed. This candle also has a long lower shadow, that is, the stock was trading lower during the day, but finally ended up rising and closed at its highest price. IF we read the above correctly, we will notice that this is a candle of great bullish strength, that is, a candle that tells us that the price on the next day will probably be bullish again, because the stock closed at its maximum price. and it has a long lower shadow that the stock was able to resolve, increasing its price during the day.") 
    const [ span10, setSpan10] = useState("The candle on the right is similar in formation") 
    const [ p22, setP22] = useState (", but rather it expresses a bearish force (I hope you can infer why, otherwise I invite you to read the previous analysis and do the same with this red candle).") 
    const [ span11, setSpan11] = useState("The third candle is a candle of indecision") 
    const [ p23, setP23] = useState (". As we can see, the body of the candle is green (the stock went up) but it is a very small body, the price variation was minimal. On the other hand, this candle does have a long upper and lower shadow. Which means that the market is confused and does not know if the stock should go up or down.") 
    const [ p24, setP24] = useState ("This is just an appetizer. There are many types of candles and combinations of them. I gladly invite you to delve deeper into the topic.") 



    useEffect(()=> {
            
        if ( lenguague ==  "English") {
  
            
        setT("Technical analysis") 
        setP1("And it was time for technical analysis. As we talked about in the previous sections, when I am going to choose where to channel my investment in the stock market (focusing on the issue of stocks), there are two main tools: Fundamental analysis (discussed previously) and technical analysis.") 
        setT2("What is technical analysis about?") 
        setP2("Simply and simply, it is the study of graphics. The technical analyst is one who, by studying the historical price of the asset, tries to predict what its future behavior will be. That is, when we invest using this tool, what we do is study how the historical price of our share has behaved, and then invest our money, trying to predict where the price will continue to move.") 
        setT3("Features of technical analysis") 
        setP3("Let's go a little more into detail...") 
        setSpan("The asset price summarizes everything you need to know.") 
        setP4("Technical analysts are great defenders of their work. For them, in the stock market world, there is a lot of inside information about companies and all the aspects that can affect their value on the stock market, which the general public does not know. For this reason, technicians maintain that those who do access this privileged information, use it for their own good before it becomes known to the public, and therefore, when the information is finally known, it has already been discounted in the price of the stock on the stock market. In this way they maintain,") 
        setSpan2("More than analyzing the fundamentals of a company, an investor or trader must analyze how the share price moves on the stock market as their true source of information.") 
       
        setSpan3("It handles a smaller amount of information than fundamental analysis.") 
        setP6("Although clearly, to achieve a satisfactory level of technical analysis a lot of preparation and operational experience is needed, it is also true that technical analysis seeks to “make it easier” for the investor to make decisions. That is to say,") 
        setSpan4("It seeks for each of us to develop a simple and successful strategy based solely on graph analysis.") 
        setP7("Something that differs from fundamental analysis, since the latter requires a deeper investigative level.") 
        setSpan5("The trend is your friend.") 
        setP8("Stock prices move in trends. That is to say, at one time they rise, they fall, and at another time they remain in a lateral movement. Technical analysis offers us as investors tools to follow these movements. There is nothing more disastrous for invested money than betting on the opposite direction to which the market is heading.") 
        setSpan6("Stop Loss is rule number 1.") 
        setP9("The stop loss (stop loss) is a very helpful tool for any investor. It is based on something simple, if we are wrong in our analysis, and the market does not show it this way with the movement of the price of our share, our duty is to immediately exit that investment. As technical analysis is based exclusively on graphs and does not intend to introduce fundamentals to your investment strategy, we can very easily become “blind” to very important news that affects the price of our investment. Therefore, keeping the above clear, it is always important to protect our capital from losing investments, selling said investment, when required.") 
        setSpan7("Management of emotions.") 
        setP10("One of the most difficult aspects to develop in our lives as investors is the management of emotions. This is a decisive factor to achieve success in this business. It takes time, experience (and yes, money!!) to learn how to close a losing investment, or suppress the greed of a winning one. But once we learn to manage this aspect, we will have taken a giant step!") 
        setT4("TECHNICAL ANALYSIS TOOLS") 
        setP11("In the world of technical analysis, there are many tools (indicators, charts, oscillators), which, based mainly on the price movement and trading volume of the stock, try to predict where the stock will move. Let's look at one of them:") 
        setT5("JAPANESE CANDLES") 
        setP12("What are they?")
        setP13("Japanese candles were an analysis tool that the Japanese used to try to predict what the future price of the goods they produced from their agricultural crops would be.")
        setP14("How is a Japanese candlestick formed? Let's see this with the following example:")
        setP15("Let's look at the graph above and focus for a moment on the first candle, that is, on the green bar in the upper right. Suppose that candle represents today's movement of Ecopetrol's stock.")
            setSpan8("How did that green candle form?") 
            setP16("It's simple. The candle is divided into two parts, the body and the shadow. The body would be the green bar, and the shadow, the black “legs” that emerge from the top and bottom of the green body.")
            setP17("The body represents to us what Ecopetrol's action changed on the day. For this example, we can infer that the stock started at a price of 4,800 and closed the day at 5,100. If we look at the graph, that is indeed the space that includes the green body of the candle. On the other hand, the shadow or legs show us prices that the stock reached during the day but that are not within its absolute variation. In our example, we see that the lower leg or leftover takes a value of 4,600, this means that most likely the Ecopetrol stock started the day at 4,800 and then fell to 4,600, to finally close at 5,100. As we can see, the stock started at 4,800 and closed at 5,100, but on the day it was trading at a minimum price of 4,600, which is what represents the lower shadow or leg.")
            setP18("With the upper shadow it is something very similar. Surely at some point during the day Ecopetrol's stock was trading at a price of 5,200 but then it returned a little and closed at the aforementioned 5,100. That is, the upper leg shows us the maximum price that the stock reached, and the lower leg shows us the minimum price. Very easy.")
            setP19("Now, when a stock closes higher (increased in price) its body is green as in the previous example. But when it closes lower (the price drops) its body turns red. In the red candles the shadows represent the same thing, they simply change in the sense that they tell us if the price closed higher or lower than the initial price.")
            setT6("What are Japanese candles used for?") 
           
            setP20("The candles try to illustrate what the sentiment is or where the strength of the market is. They show us whether the action, based on how it moved, is more likely to rise or fall in the following days.") 
            setSpan9("Let's look at the green candle at the bottom left for a moment.") 
            setP21("As we can see, this candle is bullish (green body) and has no upper shadow. That is, the maximum price of the day is also the price at which the stock closed. This candle also has a long lower shadow, that is, the stock was trading lower during the day, but finally ended up rising and closed at its highest price. IF we read the above correctly, we will notice that this is a candle of great bullish strength, that is, a candle that tells us that the price on the next day will probably be bullish again, because the stock closed at its maximum price. and it has a long lower shadow that the stock was able to resolve, increasing its price during the day.") 
            setSpan10("The candle on the right is similar in formation") 
            setP22(", but rather it expresses a bearish force (I hope you can infer why, otherwise I invite you to read the previous analysis and do the same with this red candle).") 
            setSpan11("The third candle is a candle of indecision") 
            setP23(". As we can see, the body of the candle is green (the stock went up) but it is a very small body, the price variation was minimal. On the other hand, this candle does have a long upper and lower shadow. Which means that the market is confused and does not know if the stock should go up or down.") 
            setP24("This is just an appetizer. There are many types of candles and combinations of them. I gladly invite you to delve deeper into the topic.") 

        }  else {
            
            setT("Análisis Técnico") 
            setP1("Y llegó la hora del análisis técnico. Como hablamos en los anteriores apartados, cuando yo voy a elegir donde canalizar mi inversión en bolsa (centrándonos en el tema de acciones), existen dos herramientas principales: Análisis fundamental (tratado anteriormente) y el análisis técnico.") 
            setT2("¿De qué se trata el análisis técnico?") 
            setP2("Simple y sencillamente es el estudio de gráficas. El analista técnico es aquel que mediante el estudio de la cotización histórica que ha dejado el activo, intenta predecir, cuál va a ser su comportamiento futuro. Es decir, cuando invertimos mediante esta herramienta, lo que hacemos es estudiar cómo se ha comportado el precio histórico de nuestra acción, para luego invertir nuestro dinero, intentando prever para donde se seguirá moviendo el precio.") 
            setT3("Características del análisis técnico") 
            setP3("Vayamos un poco más al detalle…") 
            setSpan("La cotización del activo resume todo lo que se necesita saber.") 
            setP4("Los analistas técnicos son grandes defensores de su trabajo. Para ellos, en el mundo bursátil, existe mucha información privilegiada a cerca de las empresas y todos los aspectos que pueden afectar su valor en bolsa, que no conoce el público general. Por ello, los técnicos sustentan que los que si acceden a esta información privilegiada, la utilizan para su bien antes de que salga a ser conocida por el público, y por tanto, cuando finalmente se conoce la información, esta ya ha sido descontada en el precio que tiene la acción en bolsa. De esta manera sostienen,") 
            setSpan2("que más que analizar los fundamentales de una empresa, un inversionista o trader, debe es analizar cómo se mueve el precio de la acción en bolsa como su verdadera fuente de información.") 
         
            setSpan3("Maneja menor cantidad de información que el análisis fundamental.") 
            setP6("Aunque claramente, para llegar a tener un nivel de análisis técnico satisfactorio se necesita de mucha preparación y experiencia operativa, también es cierto, que el análisis técnico busca “facilitarle” la toma de decisiones al inversionista. Es decir,") 
            setSpan4("busca que cada uno de nosotros desarrollemos una estrategia sencilla y exitosa basada únicamente en el análisis de gráfica.") 
            setP7("Algo que difiere con el análisis fundamental, puesto que este último requiere de un nivel investigativo de mayor profundidad.") 
            setSpan5("La tendencia es tu amiga.") 
            setP8("Los precios de las acciones se mueven en tendencias. Es decir, un tiempo suben, bajan, y otro tanto se mantiene en un movimiento lateral. El análisis técnico nos ofrece a nosotros como inversionistas, herramientas para ir con dichos movimientos. No hay nada más desastroso para un dinero invertido, que apostarle a el lado contrario al que se dirige el mercado.") 
            setSpan6("El Stop Loss es la regla número 1.") 
            setP9("El stop loss (freno de la pérdida) es una herramienta de gran ayuda para cualquier inversionista, Se basa en algo sencillo, si nosotros estamos equivocados en nuestro análisis, y el mercado no lo demuestra así con el movimiento del precio de nuestra acción, nuestro deber es salir inmediatamente de esa inversión. Como el análisis técnico se basa exclusivamente en gráficas y no pretende introducir fundamentales a su estrategia de inversión, muy fácilmente podemos quedar “ciegos” ante una noticia muy importante que afecte el precio de nuestra inversión. Por tanto, teniendo en claro lo anterior, siempre es importante cuidar nuestro capital de las inversiones perdedoras, vendiendo dicha inversión, cuando así se requiere.") 
            setSpan7("Manejo de las emociones.") 
            setP10("Uno de los aspectos que más cuesta desarrollar en nuestra vida como inversionistas es el manejo de las emociones. Este es un factor decisivo para llegar al éxito en este negocio. Cuesta tiempo, experiencia (¡y si, dinero!!) aprender a cerrar una inversión perdedora, o suprimir la codicia de una ganadora. ¡Pero una vez se aprende a manejar este aspecto, habremos dado un paso gigantesco!") 
            setT4("HERRAMIENTAS DE ANÁLISIS TÉCNICO") 
            setP11("En el mundo del análisis técnico, existen muchas herramientas (indicadores, gráficos, osciladores), que a partir del movimiento del precio y el volumen de negociación de la acción principalmente, tratan de predecir hacia donde se moverá la misma. Veamos uno de ellos:") 
            setT5("VELAS JAPONESAS") 
            setP12("¿Qué son?")
            setP13("Las velas japonesas fueron una herramienta de análisis que utilizaban los japoneses para tratar de predecir cuál sería el precio futuro de los bienes que producían en sus cosechas agrícolas.")
            setP14("¿Cómo se forma una vela japonesa?. Veamos esto con el siguiente ejemplo:")
            setP15("Observemos la gráfica superior y centrémonos por un momento en la primera vela, es decir, en la barra de color verde que se encuentra en la parte superior derecha. Supongamos que esa vela representa el movimiento del día de hoy de la acción de Ecopetrol.")
            setSpan8("¿Cómo se formó esa vela verde?") 
            setP16("Es sencillo. La vela se divide en dos partes, el cuerpo y la sombra. El cuerpo sería la barra verde, y la sombre, las “paticas” de color negro que se desprenden arriba y abajo del cuerpo verde.")
            setP17("El cuerpo nos representa lo que varió la acción de Ecopetrol en el día. Para este ejemplo, podemos inferir que la acción empezó a un precio de 4.800 y cerró el dia en 5.100. Si observamos la gráfica, efectivamente ese es el espacio que comprende el cuerpo verde de la vela. Por otro lado, la sombra o las paticas nos muestran precios que alcanzó la acción durante el día pero que no se encuentran dentro de su variación absoluta. En nuestro ejemplo, vemos que la patica o sobra inferior toma un valor de 4.600, esto quiere decir, que muy seguramente la acción de Ecopetrol, arrancó el día a 4.800 y luego bajó a 4,600, para finalmente cerrar a 5.100. Como vemos la acción arrancó a 4.800 y cerró a 5.100, pero en el día alcanzó a cotizar a un precio mínimo de 4,600, el cual es el que representa la sombra o patica inferior.")
            setP18("Con la sombra superior es algo muy similar. Seguramente en algún momento del día la acción de Ecopetrol alcanzó a cotizar a un precio de 5.200 pero luego se devolvió un poco y cerró en el ya mencionado 5.100. Es decir, la patica superior nos muestra el precio máximo que alcanzó la acción, y la inferior el precio mínimo. Muy sencillo.")
            setP19("Ahora bien, cuando una acción cierra alza (aumentó de precio) su cuerpo es verde como en el anterior ejemplo. Pero cuando esta cierra a la baja (baja el precio) su cuerpo se torna de color rojo. En las velas rojas las sombras representan lo mismo, simplemente cambian en sentido que nos dicen si el preció cerró más arriba o más abajo del precio inicial.")
            setT6("¿Para qué nos sirven las velas japonesas?") 
            
            setP20("Las velas nos tratan de ilustrar cual es el sentimiento o hacia donde está la fuerza del mercado. Nos dibujan si la acción de acuerdo a como se movió tiene más probabilidad de subir o de bajar para los siguientes días.") 
            setSpan9("Veamos un momento la vela verde de la parte inferior izquierda.") 
            setP21("Como podemos ver esta vela es alcista (cuerpo verde) y no tiene sombra superior. Es decir, el precio máximo del día es también el precio al que cerró la acción. Esta vela también tiene una larga sombra inferior, es decir, la acción estuvo cotizando durante el día a la baja, pero finalmente terminó subiendo y cerró en su precio más alto. SI leemos bien lo anterior, notaremos que esta es una vela de gran fuerza alcista, es decir, una vela que nos indica que probablemente el precio en el siguiente día va a ser alcista de nuevo, debido a que la acción cerró en su precio máximo y tiene una larga sombra inferior que la acción pudo resolver, incrementando su precio durante el día.") 
            setSpan10("La vela de la derecha es similar en formación") 
            setP22(", sino que expresa es una fuerza bajista (espero que sepan inferir el por qué, de lo contrario los invito a leer el anterior análisis y hacer lo mismo con esta vela roja).") 
            setSpan11("La tercera vela es una vela de indecisión") 
            setP23(". Como podemos ver, el cuerpo de la vela es verde (la acción subió) pero es un cuerpo muy pequeño, la variación de precio fue mínima. En cambio, esta vela si tiene una larga sombra superior e inferior. Lo cual nos quiere decir que el mercado está confundido y no sabe si la acción deba subir o bajar.") 
            setP24("Esto es sólo un abrebocas. Existen muchos tipos de vela y combinación de las mismas. Los invito gustosamente a profundizar en el tema.") 

        }
             
      }) 
    return (
        <>
         <div className={styles.edutext}>
             <h1>{titulo}</h1>
             <img className={styles.imgedu} src="/edu31.jpg" alt="edu31" />
             <p>{p1}</p>
             <h2>{titulo2}</h2>
             <p>{p2}</p>
             <h2>{titulo3}</h2>
             <img className={styles.imgedu} src="/edu32.jpg" alt="edu32" />
             <p>{p3}</p>
             <p><span>{span}</span>{p4}<span>{span2}</span></p>
             <p><span>{span3}</span>{p6}<span>{span4}</span>{p7}</p>
             <p><span>{span5}</span>{p8}</p>
             <p><span>{span6} </span>{p9}</p>
             <p><span>{span7} </span>{p10}</p>
             <img className={styles.imgedu} src="/edu33.jpg" alt="edu33" />
             <h2>{titulo4}</h2>
             <p>{p11}</p>
             <h2>{titulo5}</h2>
             <p>{p12}</p>
             <p>{p13}</p>
             <p>{p14}</p>
             <img className={styles.imgedu} src="/edu34.jpg" alt="edu34" />
             <p>{p15}</p>
             <p><span>{span8} </span>{p16}</p>
             <p>{p17}</p>
             <p>{p18}</p>
             <p>{p19}</p>
             <h2>{titulo6}</h2>
             <p>{p20}</p>
             <p><span>{span9}</span> {p21}</p>
             <p><span>{span10}</span>{p22}</p>
             <p><span>{span11}</span>{p23}</p>
             <p>{p24}</p>        
             <img className={styles.imgedu} src="/edu35.jpg" alt="edu35" />
         </div>          
        </>
    )
}