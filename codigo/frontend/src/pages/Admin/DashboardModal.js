import './Dashboard'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { userRegister, reset } from "../../slices/userSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPlusCircleFill } from 'react-icons/bs'

const DashboardModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [checked, setChecked] = useState(false);

    const [name, setName] = useState('');
    const [surName, setSurname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault()

        const user = {
            primeiroNome: name,
            sobreNome: surName,
            dataNascimento: birthdate,
            password: email,
            email: email,
        }
        dispatch(userRegister(user))
        
        setShow(false)
        setTimeout(function() {
            window.location.reload(1);
          }, 1200)
    }

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Adicionar Usuário <BsPlusCircleFill />
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title> <span className='title'>Cadastrar Novo Usuário</span> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='dashboard-modal'>
                        <div>
                            <div className='d-flex justify-content-center mb-3'>
                                <label className='form-label w-50'>Nome:</label>
                                <input
                                    className='form-control w-50'
                                    type="text"
                                    placeholder="Nome"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className='d-flex justify-content-center mb-3'>
                                <label className='form-label w-50'>Sobrenome:</label>
                                <input
                                    className='form-control w-50'
                                    type="text"
                                    placeholder="Sobrenome"
                                    name="surname"
                                    onChange={(e) => setSurname(e.target.value)}
                                    value={surName}
                                />
                            </div>
                            <div className='d-flex justify-content-center mb-3'>
                                <label className='form-label w-50'>Email:</label>
                                <input
                                    className='form-control w-50'
                                    type="email"
                                    placeholder="E-mail"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className='d-flex justify-content-center mb-3 '>
                                <label className='form-label w-50'>Data de Nascimento:</label>
                                <input
                                    className='form-control w-50'
                                    type="date"
                                    placeholder="Data de Nascimento"
                                    name="birthdate"
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    value={birthdate}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="secondary" onClick={handleSubmit}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DashboardModal