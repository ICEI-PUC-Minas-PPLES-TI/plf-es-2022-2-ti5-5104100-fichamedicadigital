import './Dashboard'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { userUpdate, reset } from "../../slices/userSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPencilFill } from 'react-icons/bs'

const DashboardModalEdit = (usuario) => {

    const [show, setShow] = useState(false);
    let data = new Date(usuario.props.dataNascimento)
    data = data.getDate() + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState(usuario.props.primeiroNome);
    const [surName, setSurname] = useState(usuario.props.sobreNome);
    const [email, setEmail] = useState(usuario.props.email);
    const [roles,setRoles] = useState(usuario.props.roles[0].id)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault()

        let status = ''

        if(roles == 1) {
            status = 'ROLE_ADMIN'
        } else if( roles == 2) {
            status = 'ROLE_MEDICO'
        }
        else if( roles == 3) {
            status = 'ROLE_PACIENTE'
        }


        const user = {
            primeiroNome: name,
            sobreNome: surName,
            email: email,
            roles: [
                {
                    authority: status,
                    id: roles                    
                }
            ]
        }
     
        const id = usuario.props.id
        const userData = [user,id]

        dispatch(userUpdate(userData))
        
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
            
            <BsFillPencilFill onClick={handleShow}/>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title> <span className='title'>Editar Usuário</span> </Modal.Title>
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
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className='d-flex justify-content-center mb-3'>
                            <label className='form-label w-50'>Sobrenome:</label>
                            <input
                                className='form-control w-50'
                                type="text"
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
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className='d-flex justify-content-center mb-3'>
                            <label className='form-label w-50'>Status:</label>
                            <select 
                                className="form-select w-50" 
                                aria-label="Default select example"
                                onChange={(e) => setRoles(e.target.value)}
                                value={roles}>
                                <option value="3">PACIENTE</option>
                                <option value="2">MÉDICO</option>
                                <option value="1">ADMIN</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="secondary" onClick={handleSubmit}>
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DashboardModalEdit