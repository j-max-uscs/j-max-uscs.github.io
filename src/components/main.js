
import Nav from './Nav+header'
import Intro from './intro'
import Teachers from './teachers'
import bg from './assets/image-background-intro.png'
import Event from './event'
import Info from './info'
import '../medias.css'
export default function Home(){
    return(
    <main>
    <img className='image-background' src={bg} alt='beqgraund' />
        <Nav/>
        <Intro/>
        <Teachers />
        <Event/>
        <Info/>
    </main> 
    )
} 