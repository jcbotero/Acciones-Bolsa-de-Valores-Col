import styles from '/styles/Home.module.css'
import React from 'react'
import { useEffect, useState } from 'react'


export default function Edu1({lenguague}) {

    const [ titulo, setT] = useState ("What is this stock market about?") 
    const [ p1, setP1] = useState ("A Stock Exchange is a private organization that functions fundamentally like any other market that we know. That is, there are some offerors (sellers) and some demanders (buyers), who buy and sell in a space created for this purpose (The Stock Exchange).") 
    const [ p2, setP2] = useState ("Just like a family (demanders) buys their groceries from a group of companies (suppliers) in a supermarket (generated space), our stock market works, with the difference that in the latter, investors, companies, the State, and the Stock Exchange, the latter facilitating the mechanisms for financial assets (such as shares) to be traded, instead of groceries as happens in a supermarket.") 
    const [ p3, setp3a] = useState ("What are financial assets, and which ones are traded on the Stock Exchange?") 
    const [ last, setP3] = useState ("A financial asset is the name by which securities are known on the stock market. That is, when we buy a security such as shares, through the stock market, we are making an investment of our money, on a security, which is represented by a document or paper that has a value, and on which, we hope to obtain a profitability or profit.") 
    const [ p4, setP4] = useState("In the stock market, we can invest or buy, mainly in the following financial assets:") 
    const [ span, setSpan] = useState("Stocks:") 
    const [  p5, setP5] = useState("They represent a portion or ownership interest in the organization that issues them. That is, when we buy shares, what we are doing is investing our money, acquiring a piece of the company in which we invest. We become owners of a part of that company.") 
    const [ p6, setP6] = useState("When I buy a stock, I do so at a certain price, and as that price increases, my profitability will be higher. For example, suppose that I own 5 million pesos and I want to invest them in Ecopetrol shares which are at 4,000 pesos each, that is, I would be buying 1,250 shares of that company. If after 3 months, the share price rose to reach 5,000 pesos and I wanted to sell my shares, I would receive 6,250,000 pesos, that is, I would have a profit of 1,250,000 pesos. However, it is important to know that the share price can also go down. This is the reason why shares are known as equity investments, because their price can go down or up, that is, my profitability varies with the movement of the price of the share I own.") 
    const [ span2, setSpan2] = useState("Bonds and Tes:") 
    const [  p7, setP7] = useState("These are fixed income instruments. When we want to invest our money, but we know that we do not like the risk as much as in investing in stocks, but instead we seek to obtain a “safe” profit, we can achieve it through this type of fixed income investments.  Bonds and Tes are securities that represent debt, the former are issued by companies and the latter by States. That is, when I invest my money in a Bond, what I am doing is lending money to a company registered on the Stock Exchange, and when my investment is in a Tes, I am also lending my money, but this time, to the State.") 
    const [  p8, setP8] = useState("In both the Bonds and the Tes, when I invest my money, the profitability of the investment is established beforehand. That is, we as investors are given a rate of return on the investment we are making. However, there are two important aspects to consider in these investments. On the one hand, these securities have a maturity date, that is, when I buy a Bond and lend the money to a company, said company offers me a rate or profit for my money at a future date, therefore, to me They pay me when said security or debt matures. If I want to sell it sooner, the profitability varies a little according to market conditions. On the other hand, these investments are not 100% risk-free. It is possible, although it rarely happens, that the company, or the State if I invest in a Tes, goes bankrupt, causing the return of my money to be jeopardized. This happens very rarely but it is important to keep it in mind, seeking to invest in companies with a track record and good financial statements.") 
    const [ titulo2, setT2] = useState ("According to the above, what is a Stock Market for and what advantages does investing in it bring to me?") 
    const [  p9, setP9] = useState("The Stock Market is simply a mechanism that is based on the channeling of resources to promote the economic growth and development of a country or region. Through the Stock Exchange, 2 main purposes are fulfilled:") 
    const [  p10, setP10] = useState("It allows millions of people who plan or have savings to invest that money, buying or lending to the largest and most important companies in the country, thus achieving participation in their profits, watching their money grow at the pace of the economy. the nation.") 
    const [  p11, setP11] = useState("It allows companies in the country or region to finance themselves, that is, obtain the money they need to grow, through the general public, managing to meet this need through mechanisms other than traditional ones (bank loans).") 
    const [  p12, setP12] = useState("The following graph illustrates the advantages that investing my money through the stock market can bring to me as an investor:") 
    const [ titulo3, setT3] = useState ("How do I buy and sell in the stock market?") 
    const [  p13, setP13] = useState("If the time comes, we have money saved, which we do not want to have in a bank account or another similar product, but rather we want to invest it through the stock market, the process is very simple. To buy assets such as shares, we simply have to approach a stock brokerage.") 
    const [  p14, setP14] = useState("Stock brokerage companies are institutions registered on the stock exchange to bring investors closer to companies. That is, through these commission agents I can buy and sell securities such as shares.") 
    const [  p15, setP15] = useState("In our Colombian Stock Exchange (BVC) we have around 10 endorsed commission firms. It is very easy to find them in the main cities, although if you do not live in one of them, don't worry, you can easily contact one of them by phone or mail. Although advice is not received in person, any investor, after depositing their money with the commission agent they trust (serious and safe process), can receive instructions on which assets to invest in, and can also give the order by phone or even , by email.") 
    const [  p16, setP16] = useState("Stock brokerage companies charge a percentage or commission on each transaction. For example, if I have 10 million pesos to invest, I want to buy shares, and my broker suggests that we buy Bancolombia securities, they charge me a commission on the transaction amount. That is, if the commission is 1% (a percentage that varies according to each commission agent), at the time of buying, they deduct that value, 100,000 pesos, and another 1% at the time of selling.") 
    const [  p17, setP17] = useState("Do the commissions seem very expensive to you? There is also a solution for that, E-trading.  The percentage that the commission agents charge includes the purchase or sale operation, and the advice to choose the best possible among the options. On the other hand, if we consider that we know about the market, and can make our own decisions without professional advice, we can buy and sell shares through E-trading.") 
    const [  p18, setP18] = useState("E-trading is the purchase and sale of assets through platforms connected through the Internet. That is, if I so wish, the stock broker allows me to access a program or platform, where, using an internet connection, I can buy and sell directly from my home or workplace. This is a very simple and economical process, since the commissions that are handled are considerably lower. Of course, I want to emphasize that having knowledge and experience on the subject is seriously recommended.") 
    const [ titulo4, setT4] = useState("How do I buy and sell in the stock market?") 
    const [  p19, setP19] = useState("Once we have decided to invest our savings in the stock market, or we want to prepare for the moment when we can do so, it is necessary for any investor, even when they have professional and personalized advice, to know which methods are most used in the analysis of these types of investments, which will help us create an effective strategy in order to maximize our profits.") 
    const [  p20, setP20] = useState("There are two main “schools” used to determine this objective. The") 
    const [ span3, setSpan3] = useState("fundamental analysis") 
    const [  p21, setP21] = useState("and the") 
    const [ span4, setSpan4] = useState("technical analysis") 
    const [  p22, setP22] = useState(". These are going to be our guides on this path of making our investment in the stock market a satisfactory experience, which in the future will lead us to be profitable and successful investors. These two schools are going to be our next topic in sequence.") 
    const [ titulo5, setT5] = useState ("“He who is not strong enough to take risks will not be able to achieve anything in life.”") 


    useEffect(()=> {
            
      if ( lenguague ==  "English") {

        setT("What is this stock market about?")
        setP1("A Stock Exchange is a private organization that functions fundamentally like any other market that we know. That is, there are some offerors (sellers) and some demanders (buyers), who buy and sell in a space created for this purpose (The Stock Exchange).")
        setP2("Just like a family (demanders) buys their groceries from a group of companies (suppliers) in a supermarket (generated space), our stock market works, with the difference that in the latter, investors, companies, the State, and the Stock Exchange, the latter facilitating the mechanisms for financial assets (such as shares) to be traded, instead of groceries as happens in a supermarket.")  
        setp3a("What are financial assets, and which ones are traded on the Stock Exchange?")
        setP3("A financial asset is the name by which securities are known on the stock market. That is, when we buy a security such as shares, through the stock market, we are making an investment of our money, on a security, which is represented by a document or paper that has a value, and on which, we hope to obtain a profitability or profit.")
        setP4("In the stock market, we can invest or buy, mainly in the following financial assets:") 
        setSpan("Stocks:") 
        setP5("They represent a portion or ownership interest in the organization that issues them. That is, when we buy shares, what we are doing is investing our money, acquiring a piece of the company in which we invest. We become owners of a part of that company.") 
        setP6("When I buy a stock, I do so at a certain price, and as that price increases, my profitability will be higher. For example, suppose that I own 5 million pesos and I want to invest them in Ecopetrol shares which are at 4,000 pesos each, that is, I would be buying 1,250 shares of that company. If after 3 months, the share price rose to reach 5,000 pesos and I wanted to sell my shares, I would receive 6,250,000 pesos, that is, I would have a profit of 1,250,000 pesos. However, it is important to know that the share price can also go down. This is the reason why shares are known as equity investments, because their price can go down or up, that is, my profitability varies with the movement of the price of the share I own.") 
        setSpan2("Bonds and Tes:") 
        setP7("These are fixed income instruments. When we want to invest our money, but we know that we do not like the risk as much as in investing in stocks, but instead we seek to obtain a “safe” profit, we can achieve it through this type of fixed income investments.  Bonds and Tes are securities that represent debt, the former are issued by companies and the latter by States. That is, when I invest my money in a Bond, what I am doing is lending money to a company registered on the Stock Exchange, and when my investment is in a Tes, I am also lending my money, but this time, to the State.") 
        setP8("In both the Bonds and the Tes, when I invest my money, the profitability of the investment is established beforehand. That is, we as investors are given a rate of return on the investment we are making. However, there are two important aspects to consider in these investments. On the one hand, these securities have a maturity date, that is, when I buy a Bond and lend the money to a company, said company offers me a rate or profit for my money at a future date, therefore, to me They pay me when said security or debt matures. If I want to sell it sooner, the profitability varies a little according to market conditions. On the other hand, these investments are not 100% risk-free. It is possible, although it rarely happens, that the company, or the State if I invest in a Tes, goes bankrupt, causing the return of my money to be jeopardized. This happens very rarely but it is important to keep it in mind, seeking to invest in companies with a track record and good financial statements.") 
        setT2("According to the above, what is a Stock Market for and what advantages does investing in it bring to me?") 
        setP9("The Stock Market is simply a mechanism that is based on the channeling of resources to promote the economic growth and development of a country or region. Through the Stock Exchange, 2 main purposes are fulfilled:") 
        setP10("It allows millions of people who plan or have savings to invest that money, buying or lending to the largest and most important companies in the country, thus achieving participation in their profits, watching their money grow at the pace of the economy. the nation.") 
        setP11("It allows companies in the country or region to finance themselves, that is, obtain the money they need to grow, through the general public, managing to meet this need through mechanisms other than traditional ones (bank loans).") 
        setP12("The following graph illustrates the advantages that investing my money through the stock market can bring to me as an investor:") 
        setT3("How do I buy and sell in the stock market?") 
        setP13("If the time comes, we have money saved, which we do not want to have in a bank account or another similar product, but rather we want to invest it through the stock market, the process is very simple. To buy assets such as shares, we simply have to approach a stock brokerage.") 
        setP14("Stock brokerage companies are institutions registered on the stock exchange to bring investors closer to companies. That is, through these commission agents I can buy and sell securities such as shares.") 
        setP15("In our Colombian Stock Exchange (BVC) we have around 10 endorsed commission firms. It is very easy to find them in the main cities, although if you do not live in one of them, don't worry, you can easily contact one of them by phone or mail. Although advice is not received in person, any investor, after depositing their money with the commission agent they trust (serious and safe process), can receive instructions on which assets to invest in, and can also give the order by phone or even , by email.") 
        setP16("Stock brokerage companies charge a percentage or commission on each transaction. For example, if I have 10 million pesos to invest, I want to buy shares, and my broker suggests that we buy Bancolombia securities, they charge me a commission on the transaction amount. That is, if the commission is 1% (a percentage that varies according to each commission agent), at the time of buying, they deduct that value, 100,000 pesos, and another 1% at the time of selling.") 
        setP17("Do the commissions seem very expensive to you? There is also a solution for that, E-trading.  The percentage that the commission agents charge includes the purchase or sale operation, and the advice to choose the best possible among the options. On the other hand, if we consider that we know about the market, and can make our own decisions without professional advice, we can buy and sell shares through E-trading.") 
        setP18("E-trading is the purchase and sale of assets through platforms connected through the Internet. That is, if I so wish, the stock broker allows me to access a program or platform, where, using an internet connection, I can buy and sell directly from my home or workplace. This is a very simple and economical process, since the commissions that are handled are considerably lower. Of course, I want to emphasize that having knowledge and experience on the subject is seriously recommended.") 
        setT4("How do I buy and sell in the stock market?") 
        setP19("Once we have decided to invest our savings in the stock market, or we want to prepare for the moment when we can do so, it is necessary for any investor, even when they have professional and personalized advice, to know which methods are most used in the analysis of these types of investments, which will help us create an effective strategy in order to maximize our profits.") 
        setP20("There are two main “schools” used to determine this objective. The") 
        setSpan3("fundamental analysis") 
        setP21("and the") 
        setSpan4("technical analysis") 
        setP22(". These are going to be our guides on this path of making our investment in the stock market a satisfactory experience, which in the future will lead us to be profitable and successful investors. These two schools are going to be our next topic in sequence.") 
        setT5("“He who is not strong enough to take risks will not be able to achieve anything in life.”")

      }  else {

        setT("¿Qué es esto de la Bolsa de valores?")
        setP1("Una Bolsa de Valores, es una organización privada, que funciona fundamentalmente como cualquier otro mercado que nosotros conozcamos. Es decir, existen unos oferentes (vendedores) y unos demandantes (compradores), los cuales compran y venden en un espacio generado para este fin (La Bolsa de Valores)")
        setP2("Al igual que una familia (demandantes) compra sus víveres de un conjunto de empresas (oferentes) en un supermercado (espacio generado) funciona nuestro mercado de valores, con la diferencia, que en este último, interactúan son los inversionistas, las empresas, el Estado, y la Bolsa de Valores, esta ultima facilitando  los mecanismo para que se negocien los activos financieros (como las acciones), en lugar de víveres como sucede en un supermercado.")  
        setp3a("¿Qué son los activos financieros, y cuales se negocian en la Bolsa de Valores?")
        setP3("Un activo financiero es el nombre con el que son conocidos en bolsa, los títulos valores. Es decir, cuando nosotros compramos un titulo valor como las acciones, a través de la bolsa de valores, estamos haciendo una inversión de nuestro dinero, sobre un titulo valor, el cual es representado por un documento o papel que posee un valor, y sobre el cual, esperamos obtener una rentabilidad o ganancia. ")
        setP4("En la bolsa de valores, nosotros podemos invertir o comprar, principalmente en los siguientes activos financieros:") 
        setSpan("Acciones:") 
        setP5("Representan un porción o participación propietaria sobre el organismo que las emite. Es decir, cuando compramos acciones, lo que estamos haciendo es invertir nuestro dinero, adquiriendo un pedazo de la compañía en la cual invertimos. Nos hacemos dueños de una parte de esa compañía.") 
        setP6("Cuando yo compro una acción, lo hago a un determinado precio, y en la medida que ese precio se incremente, mi rentabilidad será mayor. Por ejemplo, supongamos que yo poseo 5 millones de pesos y deseo invertirlos en acciones de Ecopetrol las cuales se encuentran a 4.000 pesos cada una, es decir, yo estaría comprando 1.250 acciones de esa empresa. Si al cabo de 3 meses, el precio de la acción subió hasta alcanzar los 5.000 pesos y yo quiero vender mis acciones, recibiría 6.250.000 pesos, es decir, tendría una ganancia de 1.250.000 pesos. Sin embargo, es importante conocer que el precio de la acción también puede bajar. Este es el motivo por el cual las acciones son conocidas como inversiones en renta variable, por que el precio de las mismas puede bajar o subir, es decir, mi rentabilidad varía con el movimiento del precio de la acción que posea.") 
        setSpan2("Bonos y Tes:") 
        setP7(" Estos son instrumentos de renta fija. Cuando nosotros queremos invertir nuestro dinero, pero sabemos que no nos gusta mucho el riesgo como en la inversión en acciones, sino que buscamos obtener una ganancia “segura”, la podemos lograr mediante este tipo de inversiones en renta fija.  Los Bonos y los Tes son títulos valores que representan deuda, los primeros son emitidos por empresas y los segundos por los Estados. Es decir, Cuando yo invierto mi dinero en un Bono, lo que estoy haciendo es prestarle dinero a una empresa inscrita en la Bolsa de Valores, y cuando mi inversión es sobre un Tes, también estoy prestando mi dinero, pero esta vez, al Estado.") 
        setP8("Tanto en los Bonos como en los Tes, al momento de invertir mi dinero, se establece la rentabilidad de la inversión de antemano. Es decir, a nosotros como inversionistas nos dan una tasa de rentabilidad sobre la inversión que estamos haciendo. Sin embargo existen dos aspectos importantes a considerar en estas inversiones. Por un lado, estos títulos valores tienen una fecha de vencimiento, es decir, cuando compro un Bono y le presto el dinero a una empresa, dicha empresa me ofrece una tasa o ganancia por mi dinero en una fecha futura, por tanto, a mi me pagan cuando se vence dicho titulo valor o deuda. Si yo quiero venderlo antes, la rentabilidad varía un poco de acuerdo a las condiciones del mercado. Por otro lado estas inversiones no están 100% libres de riesgo. Es posible, aunque poco sucede, que la empresa, o el Estado si invierto en un Tes, se quiebre, ocasionando que la devolución de mi dinero se vea comprometida. Esto sucede muy poco pero es importante tenerlo presente, buscando invertir en empresas con trayectoria y buenos estados financieros.") 
        setT2("¿De acuerdo a lo anterior, para qué sirve una Bolsa de Valores y que ventajas trae para mí invertir en ella?") 
        setP9("La Bolsa de Valores es sencillamente un mecanismo  que se fundamenta en  la canalización de recursos para impulsar el crecimiento y desarrollo económico de un país o región. Mediante la Bolsa de Valores, se cumplen  2 fines principales:") 
        setP10("Permite que millones de personas que planean o poseen unos  ahorros, puedan invertir ese dinero, comprando o prestándole a las empresas más grandes e importantes del país, logrando de esa forma ser participes de sus ganancias, viendo crecer su dinero al ritmo de la economía de la nación.") 
        setP11("Permite que las empresas del país o de la región, puedan financiarse, es decir, obtener el dinero que necesitan para crecer, a través del publico en general, logrando suplir esta necesidad mediante mecanismos diferentes a los tradicionales (prestamos bancarios).") 
        setP12("La siguiente gráfica ilustra las ventajas que puede traer para mí como inversionista, el invertir mi dinero a través de la Bolsa de valores:") 
        setT3("Cómo yo compro y vendo en el mercado de acciones?") 
        setP13("If the time comes, we have money saved, which we do not want to have in a bank account or another similar product, but rather we want to invest it through the stock market, the process is very simple. To buy assets such as shares, we simply have to approach a stock brokerage.") 
        setP14("Las comisionistas de bolsa, son instituciones inscritas en la bolsa de valores, para acercar a los inversionistas con las empresas. Es decir, mediante estas comisionistas es que yo puedo comprar y vender títulos valores como las acciones.") 
        setP15("En nuestra Bolsa de Valores de Colombia (BVC) tenemos alrededor de 10 firmas comisionistas avaladas. Es muy fácil encontrarlas en las principales ciudades, aunque si usted no vive en una de ellas no se preocupe, fácilmente por teléfono o por correo se puede contactar a una de ellas. Aunque no se recibe una asesoría en persona, cualquier  inversionista, luego de consignar su dinero en la comisionista de su confianza (proceso serio y seguro), puede recibir instrucciones sobre en que activos invertir, y también puede dar la orden de por teléfono e incluso, por correo electrónico.") 
        setP16("Las comisionistas de bolsa, cobran un porcentaje o comisión sobre cada operación. Por ejemplo, si yo poseo 10 millones de peso para invertir, deseo comprar acciones, y mi comisionista me sugiere que compremos títulos de Bancolombia, ellos me cobran una comisión sobre el monto de operación. Es decir, si la comisión es del 1% (porcentaje que varía de acuerdo a cada comisionista), al momento de comprar, me descuentan ese valor , 100.000 pesos,  y otro 1% al momento de vender.") 
        setP17("¿Les parece muy caras las comisiones? También existe una solución para eso, El E-trading.  El porcentaje que cobran las comisionistas, incluye la operación de compra o venta, y la asesoría para escoger lo mejor posible entre las opciones. Por otro lado, si nosotros consideramos que conocemos sobre el mercado, y podemos tomar nuestras propias decisiones sin asesoría profesional, podemos comprar y vender acciones mediante el E-trading.  ") 
        setP18("E-trading es la compra y venta de activos por plataformas conectadas a través de internet. Es decir, si yo lo deseo así, la comisionista de bolsa me deja acceder a un programa o plataforma, en donde a partir de una conexión a internet, yo puedo comprar y vender directamente desde mi casa o lugar de trabajo. Este es un proceso muy sencillo, y económico, puesto que las comisiones que se manejan, son considerablemente mas bajas. Por supuesto, quiero recalcar que se recomienda seriamente el tener conocimientos y experiencia en el tema.") 
        setT4("{titulo3}") 
        setP19("Una vez hemos decidido invertir nuestros ahorros en el mercado accionario, o nos queremos preparar para el momento en que podamos hacerlo, es necesario para cualquier inversionista, aún cuando cuente con asesoría profesional y personalizada, conocer cuales son los métodos más utilizados en el análisis de este tipo de  inversiones, los cuales nos ayudarán a crear una estrategia efectiva,  en sentido de maximizar nuestras ganancias.") 
        setP20("Existen dos grandes “escuelas”  utilizadas para determinar este objetivo. El") 
        setSpan3("análisis fundamental") 
        setP21("y el") 
        setSpan4("análisis técnico") 
        setP22(". Estos van a ser nuestros guías en este camino de hacer de nuestra inversión en bolsa, una experiencia satisfactoria, que a futuro, nos lleve a ser unos inversionistas rentables y exitosos. Estas dos escuelas, van a ser nuestro próximo tema en secuencia.") 
        setT5("“Aquel que no es suficientemente fuerte como para correr riesgos, no podrá lograr nada en la vida”")
      }
           
    }) 


    return (
        <>
         <div className={styles.edutext}>
             <h1>{titulo}</h1>
             <p>{p1} </p>
             <p>{p2}</p>
             <img className={styles.imgedu} src="/edu11.jpg" alt="edu11" />
             <h1>{p3}</h1>
             <p>{last}</p>
             <p>{p4}</p>
             <p><span>{span}</span> {p5}</p>
             <p>{p6}</p>
             <p><span>{span2} </span>{p7} </p>
             <p>{p8}</p>
             <img className={styles.imgedu} src="/edu12.jpg" alt="edu12" />
             <h1>{titulo2}</h1>
             <p>{p9}</p>
             <ol>
                <li>{p10}</li>
                <li>{p11}</li>
             </ol>
             <p>{p12}</p>
             <img className={styles.imgedu} src="/edu13.jpg" alt="edu13" />
             <h1>{titulo3}</h1>
             <p>{p13}</p>
             <p>{p14}</p>
             <p>{p15}</p>
             <p>{p16}</p>
             <p>{p17} </p>
             <p>{p18}</p>
             <h1>{titulo3}</h1>
             <p>{p19} </p>
             <p>{p20} <span>{span3}</span>{p21}<span>{span4}</span>{p22}</p>
             <h2>{titulo5}<span>(Muhammad Ali)</span></h2>
         </div>          
        </>
    )
}