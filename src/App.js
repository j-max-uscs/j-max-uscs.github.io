
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './components/main'
import PagEvento from './evento/PaginaEscrita'

export default function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/evento' element={<PagEvento />}/>
            </Routes>
        </Router>
        </>

    );
}