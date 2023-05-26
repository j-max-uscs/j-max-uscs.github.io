import oficina from "./assets/oficina.png"
import palestra from "./assets/palestra.png"
import Atropos from "atropos/react"


export default function Oficinas() {
    const handleClick = () => {
        window.open('https://docs.google.com/document/d/1IHRzQmjBq_bqRfAVynW85fbXDq-MFENS/edit?usp=sharing&ouid=117257627595223167130&rtpof=true&sd=true');
      }


    return(
        <>
        <h2 id="explicacao">Oficinas e Palestras</h2>
        <div className="cssOficinas" id="idOficina" >
            
            <Atropos
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        <img src={oficina} id="imagemOficina" alt="bugou" />
      </Atropos>
            <p>Em um dos dias do evento, 
                os professores, Aparecido e Leila, 
                realizarão em suas respectivas salas, 
                uma pequena palestra. Assim, a seguir, 
                os visitantes poderão experienciar o 
                novo assunto apresentado através de 
                atividades guiadas pelos mesmos, a fim
                 de faze-los aprender sobre novos 
                 assuntos na área de tecnologia e
                  sobre a vida no mercado de trabalho.</p>

        </div>

        <div className="cssOficinas" id="idPalestra" >

            <Atropos
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
      <img src={palestra} id="imagemPalestra" alt="bugou" />
      </Atropos>
            <p>Além das oficinas oferecidas pelo evento, 
                também serão apresentadas por outros dois
                 professores duas palestras. Nelas, serão
                  abordados assuntos atuais sobre tecnologia
                   e o mundo no mercado de trabalho de TI.
                    Além de uma brimcadeira surpresa
                     oferecida por um dos professores.</p>
        </div>

        <button id="botaoProgramacao" onClick={handleClick} >PROGRAMAÇÃO</button>
        </>
    )

}
