import './Dashboard'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { userRegister, reset } from "../../slices/userSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillEyeFill } from 'react-icons/bs'

const DashboardModalView = (usuario) => {

    const [show, setShow] = useState(false);
    let data = new Date(usuario.props.dataNascimento)
    data = data.getDate() + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <>

            <BsFillEyeFill onClick={handleShow} />
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title> <span className='title'>Visualizar Usuário</span> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='dashboard-modal'>
                        <div className='d-flex justify-content-center mb-3'>
                            <label className='form-label w-50'>ID:</label>
                            <input
                                className='form-control w-50'
                                type="text"
                                name="id"
                                value={usuario.props.id}
                                disabled
                            />
                        </div>
                        <div className='d-flex justify-content-center mb-3'>
                            <label className='form-label w-50'>Nome:</label>
                            <input
                                className='form-control w-50'
                                type="text"
                                name="name"
                                value={usuario.props.primeiroNome}
                                disabled
                            />
                        </div>
                        <div className='d-flex justify-content-center mb-3'>
                            <label className='form-label w-50'>Sobrenome:</label>
                            <input
                                className='form-control w-50'
                                type="text"
                                name="surname"
                                value={usuario.props.sobreNome}
                                disabled
                            />
                        </div>
                        <div className='d-flex justify-content-center mb-3'>
                            <label className='form-label w-50'>Email:</label>
                            <input
                                className='form-control w-50'
                                type="email"
                                name="email"
                                value={usuario.props.email}
                                disabled
                            />
                        </div>
                        <div className='d-flex justify-content-center mb-3'>
                            <label className='form-label w-50'>Status:</label>
                            <input
                                className='form-control w-50'
                                type="email"
                                name="email"
                                value={usuario.props.roles[0].authority == 'ROLE_PACIENTE' ? 'PACIENTE' : (usuario.props.roles[0].authority == 'ROLE_MEDICO' ? 'MÉDICO' : 'ADMIN')}
                                disabled
                            />
                        </div>
                        <div className='d-flex justify-content-center mb-3 '>
                            <label className='form-label w-50'>Data de Nascimento:</label>
                            <input
                                className='form-control w-50'
                                type="text"
                                name="dataNascimento"
                                value={data}
                                disabled
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DashboardModalView