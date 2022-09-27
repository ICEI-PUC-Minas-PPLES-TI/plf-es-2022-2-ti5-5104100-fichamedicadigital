import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import { useState } from 'react';
import Routes from './Routes'
import {Routes as Rotas, Route,Navigate, BrowserRouter} from 'react-router-dom'
import Logo from '../components/template/Logo/Logo'
import Nav from '../components/template/Nav/Nav'
import Footer from '../components/template/Footer/Footer'
import Login from '../components/views/Login/Login';
import Cadastro from '../components/views/Cadastro/Cadastro';
import Context from '../services/Context';

const App = () => {

    const [token, setToken] = useState(0);
  
    return (
        <>
        <Context.Provider value={[token, setToken]}>
            {!token  &&
                <div className='signin'>
                    <BrowserRouter>
                        <Rotas>
                            <Route exact path='/' element={<Login/>}/>
                            <Route exact path='/signup' element={<Cadastro/>}/>
                        </Rotas>
                            {/* <Navigate from='*' to='/'/> */}
                    </BrowserRouter>
                </div>
            }
            {token  &&
                <div className="app">
                    <BrowserRouter>
                        <Logo/>
                        <Nav/>
                        <Routes/>
                        <Footer/>
                    </BrowserRouter>
                </div>
            }
        </Context.Provider>
        </>
    )
}
export default App
        
