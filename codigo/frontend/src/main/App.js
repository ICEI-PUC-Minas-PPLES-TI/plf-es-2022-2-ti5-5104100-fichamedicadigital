import './App.css';
// import Logo from '../components/template/Header'
import { BrowserRouter} from 'react-router-dom'
import Logo from '../components/template/Logo/Logo'
import Nav from '../components/template/Nav/Nav'
import Footer from '../components/template/Footer/Footer'
import Main from '../components/template/Main/Main'

export default props =>

    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            <Main/>
            {/* <Routes/> */}
            <Footer/>
        </div>
    </BrowserRouter>
