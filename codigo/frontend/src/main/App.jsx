import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

import Routes from './Routes'
import {Routes as Rotas, Route,Navigate, BrowserRouter} from 'react-router-dom'
import Logo from '../components/template/Logo/Logo'
import Nav from '../components/template/Nav/Nav'
import Footer from '../components/template/Footer/Footer'
import Login from '../components/views/Login/Login';
import Cadastro from '../components/views/Cadastro/Cadastro';
import { useState,React } from 'react';

const App = () => {

    const isLogged = false

    return (
        <>
            {!isLogged  &&
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
            {isLogged  &&
                <div className="app">
                    <BrowserRouter>
                        <Logo/>
                        <Nav/>
                        <Routes/>
                        <Footer/>
                    </BrowserRouter>
                </div>
            }
        </>
    )
}
export default App
        
