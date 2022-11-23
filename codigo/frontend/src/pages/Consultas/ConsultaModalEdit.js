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
        setStatus("")
    };
    const handleShow = () => setShow(true);

    const [data, setData] = useState(consultaPaciente.data)
    const [horaInicio, setHoraInicio] = useState(consultaPaciente.horaInicio)
    const [horaFim, setHoraFim] = useState(consultaPaciente.horaFim)
    const [status,setStatus] = useState(consultaPaciente.status)

    const dispatch = useDispatch();

    const handleEdit = () => {
        handleShow()
    }

    const handleData = (diaConsulta) => {
        let dia = new Date(diaConsulta);
        let diaStr = dia.getDate().toString()
        if(diaStr.length == 1) {
            return  ((dia.getFullYear() )) + "-" + ((dia.getMonth() + 1)) + "-"  + "0"+(dia.getDate() + 1 ); 
        }
        return  ((dia.getFullYear() )) + "-" + ((dia.getMonth() + 1)) + "-" + (dia.getDate() + 1 ); 
    }

    const handleHora = (time) => {
        let hora = new Date(time)
        let retorno = ((hora.getHours() + 3)) + ":" + ((hora.getMinutes()))
        if((((hora.getHours() +3).toString())).length == 1) {
            return ("0"+retorno);
        }
        if(retorno.substr(4,1) == "") {
            return (retorno+"0");
        }
        return retorno;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const idPaciente = consultaPaciente.paciente.id
        const idMedico = consultaPaciente.medico.id
        // const consulta = {
        //     data: new Date(data).toISOString(),
        //     horaInicio: (`${data}T${horaInicio}:00.185Z`),
        //     horaFim: (`${data}T${horaFim}:00.185Z`),
        //     paciente: {
        //         id: idPaciente
        //     },
        //     medico: {
        //         id: idMedico
        //     },
        //     status:status
        // }
        // const consultData = [idConsulta,consulta]

        // dispatch(consultUpdate(consultData))

        const param = [idConsulta,status]
        dispatch(consultUpdateStatus(param))

        setShow(false)
        setTimeout(function() {
            window.location.reload(1);
          }, 1200);
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
                            <input className='form-control w-25 ms-3 me-5' type="date" disabled onChange={(e) => setData(e.target.value)} value={handleData(consultaPaciente.data)}/>
                            <input className='form-control w-25' name='horario_inicio' disabled type="time" onChange={(e) => setHoraInicio(e.target.value)} value={handleHora(consultaPaciente.horaInicio)} />
                            <span className="span-time">às</span>
                            <input className='form-control w-25 ms-4' name='horario_fim' disabled type="time"onChange={(e) => setHoraFim(e.target.value)} value={handleHora(consultaPaciente.horaFim)}/>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <label className='form-label mt-4'>Alterar Status:</label> 
                                <select className="form-select " aria-label="Default select example" onChange={(e)=> setStatus(e.target.value)} value={!status ? consultaPaciente.status : status}>
                                    <option value="MARCADA">MARCADA</option>
                                    <option value="CANCELADA">CANCELADA</option>
                                    <option value="PENDENTE">PENDENTE</option>
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