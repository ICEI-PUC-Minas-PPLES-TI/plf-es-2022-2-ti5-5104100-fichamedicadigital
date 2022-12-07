import "./Auth.css";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { login, reset } from "../../slices/authSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.auth || {});

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };

        dispatch(login(user));
    };

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <div id="login">
            <h2>Login</h2>
            <p className="subtitle">Faça o login para consultar a Ficha Médica Digital.</p>
            <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center">
                    <label className="form-label w-25">Email:</label>
                    <input
                        className="form-control w-75 mb-3"
                        type="text"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <label className="form-label w-25">Senha:</label>
                    <input
                        className="form-control w-75 mb-3"
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className='d-flex justify-content-end'>
                    {loading && <button className="btn" disabled>Aguarde...</button>}
                    {!loading && <button type="submit" className='btn'>Entrar</button>}
                    {error && <div>Erro</div>}
                </div>
            </form>
            <p className='d-flex justify-content-end mt-3'>
                Não tem uma conta? <Link to="/register">Clique aqui</Link>
            </p>
        </div>
    );
};

export default Login;