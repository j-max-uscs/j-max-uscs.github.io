import fabricio from './assets/professores/fabricio.png'
import cido from './assets/professores/cido.png'
import longato from './assets/professores/longato.png'
import leila from './assets/professores/leila.png'
import mecchi from './assets/professores/mecchi.png'


export default function Teachers(){
    return(
        <section id="teachers">
        <div className="teachers-content">
          <h2>Conheça um pouco dos palestrantes</h2>
          <h1>PROFESSORES ESPECIALIZADOS</h1>

            <div className='all-teachers'>
            <div className="card-teacher">
              <img src={fabricio} alt="" />

              <div className="teacher-content">
                <strong>Fabrício Perella</strong>
                <p>Acessor de TI e professor</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>

            <div className="card-teacher">
              <img src={cido} alt="" />

              <div className="teacher-content">
                <strong>Aparecido Freitas</strong>
                <p>Engenheiro da computação</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>






            
            <div className="card-teacher">
              <img src={longato} alt="" />

              <div className="teacher-content">
                <strong>Marcelo Longato</strong>
                <p>Professor e Engenheiro</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>

            <div className="card-teacher">
              <img src={leila} alt="" />

              <div className="teacher-content">
                <strong>Leila Sanchez</strong>
                <p>Gerente de Recursos Humanos</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
              </div>
            </div>
            


          </div>
          <div className='mecchi' id='mecchi2'>
          <div className='card-teacher' id='asd'>
              <img src={mecchi} alt="" />

              <div className="teacher-content">
                <strong>Marcelo Mecchi</strong>
                <p>O homem, o mito, a lenda</p>
                {/* <!--                 <p>Compentencias: C, Javascript</p> --> */}
                
              </div>
          </div>
          </div>
        </div>
      </section>
    )
}