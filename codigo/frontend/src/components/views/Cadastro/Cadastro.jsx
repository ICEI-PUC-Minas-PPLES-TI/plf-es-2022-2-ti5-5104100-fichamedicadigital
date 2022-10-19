import React from "react"
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import './Cadastro.css'
import axios from 'axios'
import { BASE_URL} from '../../../services/api'
import { useContext } from "react";
import Context from "../../../services/Context";


const Cadastro = () => {

    const [name,setName] = useState('');
    const [surName,setSurname] = useState('');
    const [birthdate,setBirthdate] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [emailConfirm,setEmailConfirm] = useState('');



    const [post, setPost] = React.useState(null);
    const [token, setToken] = useContext(Context);

    const handleSignup = (event) => {
        event.preventDefault()

        const user = {
            primeiroNome: name,
            sobreNome: surName,
            birthdate: birthdate,
            passwordConfirm: passwordConfirm,
            password: password,
            email:  email,
            emailConfimr: emailConfirm
        }
        axios.post(`${BASE_URL}/usuarios`, user).then((response) => {
            setPost(response.data);
            console.log(response)
        });
          setToken(true)  

    }

    return (
        <>
            <div className="cadastro">
                <div className="cadastro-content">
                    <h1 className="d-flex justify-content-center font-monospace fw-bold pt-4 display-4">Cadastro</h1>
                    <div className="pe-5 ps-5 mt-5">
                        <form onSubmit={handleSignup}>
                            <div className="d-flex align-items-center mb-3">
                                <label className="form-label w-50 font-monospace">Nome:</label>
                                <input type="text"
                                    className="form-control w-50"
                                    onChange={e=>{setName(e.target.value)}}
                                     />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <label className="form-label w-50 font-monospace">Sobrenome:</label>
                                <input type="text"
                                    className="form-control w-50"
                                    onChange={e=>{setSurname(e.target.value)}}
                                     />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <label className="form-label w-50 font-monospace">Data de Nascimento:</label>
                                <input type="date"
                                    className="form-control w-50"
                                    onChange={e=>{setBirthdate(e.target.value)}}
                                     />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <label className="form-label w-50 font-monospace">Email:</label>
                                <input type="email"
                                    className="form-control w-50"
                                    onChange={e=>{setEmail(e.target.value)}}
                                     />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <label className="form-label w-50 font-monospace">Confirme seu Email:</label>
                                <input type="email"
                                    className="form-control w-50"
                                    onChange={e=>{setEmailConfirm(e.target.value)}}
                                     />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <label className="form-label w-50 font-monospace">Senha:</label>
                                <input type="password"
                                    className="form-control w-50"
                                    onChange={e=>{setPassword(e.target.value)}}
                                     />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <label className="form-label w-50 font-monospace">Confirme sua Senha:</label>
                                <input type="password"
                                    className="form-control w-50"
                                    onChange={e=>{setPasswordConfirm(e.target.value)}}
                                     />
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="btn btn-primary w-75  font-monospace">Cadastrar</button>
                            </div>
                        </form>
                            <div className="d-flex justify-content-center mt-3">
                                <Link to={"/"}  className="btn btn-primary  w-75 font-monospace">Já possui cadastro? Logar</Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Cadastro