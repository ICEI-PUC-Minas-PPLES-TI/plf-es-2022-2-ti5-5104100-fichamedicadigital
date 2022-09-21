import React, { useState } from "react";
import './Login.css'
const Login =  () => {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState();

    const handleLogin = () => {
        console.log(email,password)
    }

    return (
        <>
            <div className="login-content">
                <h1 className="d-flex justify-content-center mt-3 font-monospace fw-bold display-4">Login</h1>
                <div className="pe-5 ps-5 mt-5">
                    <form onSubmit={handleLogin()}>
                        <div className="mb-5">
                            <label className="form-label w-25 font-monospace">Email:</label>
                            <input type="text"
                                className="form-control "
                                name="email" 
                                value={email}
                                onChange={e => {setEmail(e.target.value)}}
                                placeholder="Digite seu email" />
                        </div>
                        <div className="mb-5 mt-3">
                            <label className="form-label w-25 font-monospace">Senha:</label>
                            <input type="password"
                                className="form-control"
                                name="password" 
                                value={password}
                                onChange={e => {setPassword(e.target.value)}}
                                placeholder="Digite sua senha" />
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <button className="btn btn-primary  w-75 font-monospace ">Logar</button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-primary  w-75 font-monospace">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        
    )
}

export default Login