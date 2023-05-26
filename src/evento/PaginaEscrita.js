import Nav from "../components/Nav+header"
import bg from './assets/Rectangle 17.png'
import fotofoot from './assets/Rectangle 21.png'
import Oficinas from "./oficinas"
export default function PagEvento(){

return(
    <>
    <img src={bg} className="image-beckground" alt="aaaa"/>
    <Nav></Nav>
    <h1 id="aaaa"><b><i>Evento</i></b></h1>
    
    <Oficinas></Oficinas>

    <img src={fotofoot} id='fotofoot' alt="quebrou"/>
    </>
)
}