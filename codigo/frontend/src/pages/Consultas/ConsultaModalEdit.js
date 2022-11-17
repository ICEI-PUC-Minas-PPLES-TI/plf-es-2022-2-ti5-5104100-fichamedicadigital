import './Consultas.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { consultFindById, consultUpdate,consultUpdateStatus } from "../../slices/consultSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPencilFill } from 'react-icons/bs'


const ConsultaModalEdit = (consulta) => {

    const consultaPaciente = consulta.props
    const idConsulta = consultaPaciente.id
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setData("")
        setHoraInicio("")
        setHoraFim("")
    };
    const handleShow = () => setShow(true);

    const [data, setData] = useState("")
    const [horaInicio, setHoraInicio] = useState("")
    const [horaFim, setHoraFim] = useState("")
    const [status,setStatus] = useState("")

    const dispatch = useDispatch();

    const handleEdit = () => {
        handleShow()
    }

    const handleData = (diaConsulta) => {
        let dia = new Date(diaConsulta);
        return  ((dia.getFullYear() )) + "-" + ((dia.getMonth() + 1)) + "-" + (dia.getDate() ); 
    }

    const handleHora = (time) => {
        let hora = new Date(time)
        return ((hora.getHours())) + ":" + ((hora.getMinutes()));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        let date = new Date()
        const idPaciente = consultaPaciente.paciente.id
        const idMedico = consultaPaciente.medico.id

        const consulta = {
            data: date.toISOString(data),
            horaInicio: date.toISOString(horaInicio),
            horaFim: date.toISOString(horaFim),
            paciente: {
                id: idPaciente
            },
            medico: {
                id: idMedico
            },
        }
        const consultData = [idConsulta,consulta]

        dispatch(consultUpdate(consultData))

        const param = [idConsulta,status]
        dispatch(consultUpdateStatus(param))
       
        setShow(false)
    }

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
                            <input className='form-control w-25 ms-3 me-5' type="date" onChange={(e) => setData(e.target.value)} value={!data ? handleData(consultaPaciente.data) : data}/>
                            <input className='form-control w-25' name='horario_inicio' type="time" onChange={(e) => setHoraInicio(e.target.value)} value={!horaInicio ? handleHora(consultaPaciente.horaInicio) : horaInicio} />
                            <span className="span-time">às</span>
                            <input className='form-control w-25 ms-4' name='horario_fim' type="time"onChange={(e) => setHoraFim(e.target.value)} value={!horaFim ? handleHora(consultaPaciente.horaFim) : horaFim}/>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <label className='form-label mt-4'>Alterar Status:</label> 
                                <select className="form-select " aria-label="Default select example" onChange={(e)=> setStatus(e.target.value)} value={status}>
                                    <option value="">SELECIONE</option>
                                    <option value="MARCADA">MARCADA</option>
                                    <option value="CANCELADA">CANCELADA</option>
                                    <option value="FINALIZADA">FINALIZADA</option>
                                </select>
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
        </div>
        </>
    );
}

export default ConsultaModalEdit