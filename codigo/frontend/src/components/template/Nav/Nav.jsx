import React from "react";
import './Nav.css'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
    <nav className='menu'>
        <Link to="/">
            <i className='fa fa-home'>  Início</i>
        </Link>
        <Link to="/users">
            <i className='fa fa-users'>  Painel Admin</i>
        </Link>
        <Link to="/dashboard">
            <i className='fa fa-pie-chart'>  Dashboard</i>
        </Link>
        <Link to="/logout">
            <i className='fa fa-sign-out'>  Sair</i>
        </Link>
        
    </nav>
    </aside>