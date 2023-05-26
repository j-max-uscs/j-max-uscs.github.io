import img from './assets/image-intro.png'
import Atropos from 'atropos/react'
function Intro(){
    return (
    <section id="intro">
    <div className="intro-content">
      <div>
        <h2>Semana da Computação</h2>
        <h1>Explorando a inovação</h1>
        <p>
          Um evento de computação animado que reune várias mentes
          brilhantes, cheio de discussões aprofundadas e troca de
          conhecimentos sobre tecnologia e inovação.
        </p>
      </div>

      <Atropos
        activeOffset={40}
        shadow={false}
        highlight={false}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
      <img src={img} alt="Baisinai" />
      </Atropos>
    </div>
  </section>)
}

export default Intro