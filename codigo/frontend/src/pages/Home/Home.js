import './Home.css'
import {Link} from 'react-router-dom'
import agenda from '../../assets/imgs/agenda.png'
import ficha from '../../assets/imgs/fichaMedica.png'
import usuario from '../../assets/imgs/usuario.jpg'
import consulta from '../../assets/imgs/consultas.jpg'

const Home = () => {
    return (
        <div className='home'>
            <h2 className='home-title mt-5 mb-3'>Bem Vindo</h2>
            <hr />
            <div className='container-box'>
                <div className='row'>
                    <Link className='box-content col-5' to="/medical">
                            <img src={ficha} alt="fichaMédica" width="100%" height="70%"/>
                            <p className='pt-3'>
                                    Ficha Médica
                            </p>
                    </Link>
                    <Link className='box-content col-5' to="/agenda">
                        <img src={agenda} alt="agenda" width="100%" height="70%"/>
                        <p className='pt-3'>
                            Agenda
                        </p>
                    </Link>
                </div>
                <div className='row'>
                    <Link className='box-content col-5' to="/consultas">
                        <img src={consulta} alt="agenda" width="100%" height="70%"/>
                        <p className='pt-3'>
                            Consultas
                        </p>
                   </Link>
                    <Link className='box-content col-5' to="/profile">
                        <img src={usuario} alt="usuario" width="100%" height="70%"/>
                        <p className='pt-3'>
                            Perfil
                        </p>
                   </Link>
                </div>
            </div>

        </div>
    )
}

export default Home