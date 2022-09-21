import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

import Routes from './Routes'
import {Switch, Route,Redirect} from 'react-router'
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
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/signup' component={Cadastro}/>
                        <Redirect from='*' to='/'/>
                    </Switch>
                </div>
            }
            {isLogged  &&
                <div className="app">
                    <Logo/>
                    <Nav/>
                    <Routes/>
                    <Footer/>
                </div>
            }
        </>
    )
}
export default App
        
