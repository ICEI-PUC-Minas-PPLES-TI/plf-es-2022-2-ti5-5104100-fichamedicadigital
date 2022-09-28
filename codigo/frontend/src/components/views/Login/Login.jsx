import React, { useState } from "react";
import { useContext } from "react";
import './Login.css'
import { BASE_URL} from '../../../services/api'
import axios from 'axios'
import Context from "../../../services/Context";
import { Link } from "react-router-dom";

const Login =  () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [post, setPost] = React.useState(null);
    const [token, setToken] = useContext(Context);

    const handleLogin = (event) => {
        event.preventDefault()

        const user = {
            email: email,
            password: password,
            grant_type:'password'
        }
        axios.post(`${BASE_URL}/oauth/token`, user,{
            auth: {
                Username: 'fichamedicadigital',
                Password:  'fichamedicadigital123'
            }
        }
        ).then((response) => {
            setPost(response.data);
            console.log(response)
          });
        console.log(email,password)
       setToken(true)  
    }

    return (
        <>
            <div className="login-content">
                <h1 className="d-flex justify-content-center mt-3 font-monospace fw-bold display-4">Login</h1>
                <div className="pe-5 ps-5 mt-5">
                    <form onSubmit={handleLogin}>
                        <div className="mb-5">
                            <label className="form-label w-25 font-monospace">Email:</label>
                            <input type="text"
                                className="form-control "
                                value={email}
                                onChange={e => {setEmail(e.target.value)}}
                                placeholder="Digite seu email" />
                        </div>
                        <div className="mb-5 mt-3">
                            <label className="form-label w-25 font-monospace">Senha:</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                onChange={e => {setPassword(e.target.value)}}
                                placeholder="Digite sua senha" />
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <button type="submit" className="btn btn-primary w-75 font-monospace ">Logar</button>
                        </div>
                    </form>
                        <div className="d-flex justify-content-center mt-3">
                             <Link to="/signup"  className="btn btn-primary  w-75 font-monospace">Sem cadastro? Cadastrar</Link>
                        </div>
                </div>
            </div>
        </>
        
    )
}

export default Login