import './Auth.css'

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from "../../slices/authSlice";

const Register = () => {
    const [name, setName] = useState('');
    const [surName, setSurname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');

    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            primeiroNome: name,
            sobreNome: surName,
            dataNascimento: birthdate,
            passwordConfirm: confirmPassword,
            password: password,
            email: email,
            emailConfimr: emailConfirm
        }

        dispatch(register(user));
    };

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <div id="register">
            <h2>Cadastro</h2>
            <p className="subtitle">Cadastre-se para ter acesso à Ficha Médica Digital.</p>
            <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center mb-3'>
                    <label className='form-label w-50'>Nome:</label>
                    <input
                        className='form-control w-50'
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <label className='form-label  w-50'>Sobrenome:</label>
                    <input
                        className='form-control  w-50'
                        type="text"
                        placeholder="Sobrenome"
                        onChange={(e) => setSurname(e.target.value)}
                        value={surName}
                    />
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <label className='form-label  w-50'>Data de Nascimento:</label>
                    <input
                        className='form-control  w-50'
                        type="date"
                        onChange={(e) => setBirthdate(e.target.value)}
                        value={birthdate}
                    />
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <label className='form-label  w-50'>Email:</label>
                    <input
                        className='form-control  w-50'
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <label className='form-label  w-50'>Confirmação de Email:</label>
                    <input
                        className='form-control  w-50'
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmailConfirm(e.target.value)}
                        value={emailConfirm}
                    />
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <label className="form-label  w-50">Senha:</label>
                    <input
                        className='form-control  w-50'
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <label className="form-label  w-50">Confirme sua Senha:</label>
                    <input
                        className='form-control  w-50'
                        type="password"
                        placeholder="Confirme a senha"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </div>
                <div className='d-flex justify-content-end'>
                    <button type="submit" className='btn'>Cadastrar</button>
                </div>
            </form>
            <p className='d-flex justify-content-end mt-3'>
                Já possui conta? <Link to="/login">Clique aqui</Link>
            </p>
        </div>
    )
}

export default Register

