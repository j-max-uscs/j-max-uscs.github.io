import Secom from './assets/Secom.png'
import Atropos from 'atropos/react'

function Event(){

  const handleClick = () => {
    window.open('https://forms.gle/HF9oRKaM1EympZpF7');
  }


    return(<>
    
    <section id="event">
    <div className="event-content">
          <div className='event-testo'>
            <h1>Por que participar de nosso evento?</h1>
            <p>
              A Semana da Computação (SECOM) está chegando! Este é o evento
              perfeito para aqueles que querem se familiarizar com a tecnologia
              e entender mais sobre o mundo da computação. Se você é aluno do
              ensino médio ou do primeiro semestre da faculdade, não perca a
              oportunidade de participar da SECOM. <br />
              <br />
              Durante uma semana inteira, você terá a chance de aprender os
              fundamentos da tecnologia . Nossos palestrantes, além de nossos
              professores, são especialistas em suas áreas e vão compartilhar
              seus conhecimentos em temas como programação, inteligência
              artificial, cibersegurança e mais. <br />
              <br />
              Você também terá a oportunidade de participar de oficina práticos
              e colocar seus conhecimentos em prática. Além disso, a SECOM
              fornecerá certificados de conclusão de curso, que serão
              completamente digitais. <br />
              <br />
              Não perca essa oportunidade de ser iniciado no mundo da tecnologia
              e programação, preencha o formulário e garanta agora sua
              participação!
            </p>
            <div id="event-button"><button onClick={handleClick}>Inscreva-se!</button></div>
          </div>

          <Atropos
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
          <img src={Secom} alt="Evento - Teste" />
      </Atropos>

        </div>
      </section>

    </>)
}

export default Event
