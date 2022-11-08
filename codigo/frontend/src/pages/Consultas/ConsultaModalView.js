import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillEyeFill } from 'react-icons/bs'

const ConsultaModalView = (consulta) => {

    const [show, setShow] = useState(false);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
console.log(consulta.props)
    const handleData = (date) => {
        let data = new Date(date)
        return ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
    }
    const handleHora = (time) => {
        let hora = new Date(time)
        return ((hora.getHours() )) + ":" + ((hora.getMinutes()));
    }

    return (
        <>

            <BsFillEyeFill onClick={handleShow} />
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title> <span className='title'>Visualizar Consulta</span> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='dashboard-modal'>
                       <div className='row'>
                        <h2>Dados Paciente</h2>
                        <input className='form-control w-75 ms-3 mb-3' type="text" value={`ID:    ${consulta.props.paciente.id}`} disabled/>
                        <input className='form-control w-75 ms-3 mb-3' type="text" value={`Nome:   ${consulta.props.paciente.primeiroNome}`} disabled/>
                        <input className='form-control w-75 ms-3 mb-3' type="text" value={`Sobrenome:   ${consulta.props.paciente.ultimoNome}`} disabled/>
                        <input className='form-control w-75 ms-3 mb-3' type="text" value={`Email:   ${consulta.props.paciente.email}`} disabled/>
                        <input className='form-control w-75 ms-3 mb-3' type="text" value={`Data Nascimento:   ${handleData(consulta.props.paciente.dataNascimento)}`} disabled/>
                        <h2>Dados Consulta</h2>
                            <input className='form-control w-25 ms-3 me-5' type="text" value={handleData(consulta.props.data)} disabled/>
                            <input className='form-control w-25' name='horario_inicio' type="text"  value={handleHora(consulta.props.horaInicio)} disabled/>
                            <span className="span-time">às</span>
                            <input className='form-control w-25 ms-4' name='horario_fim' type="text" value={handleHora(consulta.props.horaFim)} disabled/>
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

export default ConsultaModalView