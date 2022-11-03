import './Consultas.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { consultFindById } from "../../slices/consultSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPencilFill } from 'react-icons/bs'


const ConsultaModalEdit = (consulta) => {

    const paciente = consulta.props.paciente
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState("")
    const [horaInicio, setHoraInicio] = useState("")
    const [horaFim, setHoraFim] = useState("")

    const dispatch = useDispatch();

    const handleEdit = () => {
        handleShow()

    }

    // useEffect(() => {
    //     dispatch(reset());
    // }, [dispatch]);

    return (
        <>
        <div>
        
            <BsFillPencilFill onClick={handleEdit}/> 
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title> <span className='title'>Editar Consulta</span> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='consulta-modal'>
                        <div className='row'>
                            <input className='form-control w-25 ms-3 me-5' type="date" onChange={(e) => setData(e.target.value)} value={data}/>
                            <input className='form-control w-25' name='horario_inicio' type="time" onChange={(e) => setHoraInicio(e.target.value)} value={horaInicio} />
                            <span className="span-time">às</span>
                            <input className='form-control w-25 ms-4' name='horario_fim' type="time"onChange={(e) => setHoraFim(e.target.value)} value={horaFim}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="secondary">
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
}

export default ConsultaModalEdit