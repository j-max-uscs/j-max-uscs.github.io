
function Nav(){

  const handleClick = () => {
    window.open('https://forms.gle/HF9oRKaM1EympZpF7');
  }
  
    return(<>
  <header>
   <div className="headerNav">
      <h1 className='logo'>SECOM</h1>
      <nav>
        <ul>
          <li><a href='/' >Convite</a></li>
          <li><a href='/evento' >Sobre o Evento</a></li>
        </ul>
      </nav>

      <button onClick={handleClick}>FORMULÁRIO</button>
   </div>
  </header>
    </>)
}

export default Nav
