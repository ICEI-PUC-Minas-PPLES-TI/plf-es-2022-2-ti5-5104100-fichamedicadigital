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
        <div className="border border-primary teste">
            <h2 className="d-flex justify-content-center mt-5 login">Login</h2>
            <div className="d-flex justify-content-center mt-4">
                <form onSubmit={handleLogin()}>
                    <div className="d-flex align-items-center">
                        <label className="form-label me-5">Email</label>
                        <input type="text"
                            className="form-control"
                            name="login" 
                            value={email}
                            onChange={e => {setEmail(e.target.value)}}
                            placeholder="Digite seu email" />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <label className="form-label me-5">Senha</label>
                        <input type="password"
                            className="form-control"
                            name="password" 
                            value={password}
                            onChange={e => {setPassword(e.target.value)}}
                            placeholder="Digite sua senha" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary mt-3 ">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        </>
        
    )
}

export default Login