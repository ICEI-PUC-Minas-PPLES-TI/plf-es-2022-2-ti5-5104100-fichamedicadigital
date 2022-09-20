import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

import Routes from './Routes'

import Logo from '../components/template/Logo/Logo'
import Nav from '../components/template/Nav/Nav'
import Footer from '../components/template/Footer/Footer'
import Login from '../components/views/Login/Login';

const app = () => {

    return (
        <div className="app">
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    )
}
export default app
        
