import './Consultas.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
    BsFillTrashFill
} from "react-icons/bs";
import Modal from './ConsultaModal';
import ModalEdit from './ConsultaModalEdit';
import ModalView from './ConsultaModalView'
import ModalUser from '../Admin/DashboardModal'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { consultFindById, consultDelete } from '../../slices/consultSlice';
import ConsultaModalView from './ConsultaModalView';


const Consultas = () => {

    const { user } = useSelector((state) => state.auth)
    
    const { consultData,loading } = useSelector((state) => state.consult || {})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(consultFindById(user.id))
    }, [])

    if(loading) {
        return <p>Carregando...</p>;
    }
    
    const handleDelete = (id) => {
        dispatch(consultDelete(id))
        setTimeout(function() {
            window.location.reload(1);
          }, 1200);
    }

    const handleData = (date) => {
        let data = new Date(date)
        return ((data.getDate() + 1)) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
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

    return (
        <div id='Consultas' >
            <h1 className='title-consultas mt-4 mb-4 d-flex aligm-self-center'>Consultas</h1>
            <Tabs>
                <TabList>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <Tab className="nav-link">Ativas/Pendentes</Tab>
                        <Tab className="nav-link">Histórico</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <Modal />
                    <ModalUser/>
                    <table className="table table-striped mt-4">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome do Paciente</th>
                                <th scope="col">Data da Consulta</th>
                                <th scope="col">Hora Início</th>
                                <th scope="col">Hora Fim</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            {consultData !== undefined && consultData.map((consulta) => (
                                (consulta.status != 'CANCELADA' && consulta.status != 'FINALIZADA' ) &&
                                <tr key={consulta.id}>
                                    <td scope="row">{consulta.id}</td>
                                    <td scope="row">{`${consulta.paciente.primeiroNome} ${consulta.paciente.ultimoNome}`}</td>
                                    <td scope="row">{handleData(consulta.data)}</td>
                                    <td scope="row">{handleHora(consulta.horaInicio)}</td>
                                    <td scope="row">{handleHora(consulta.horaFim)}</td>
                                    <td scope="row">{consulta.status}</td>
                                    <td scope="row" className='actions'>
                                        <button className='btn me-3'>
                                            <ModalView props={consulta} />
                                        </button>
                                        <button className='btn me-3'>
                                            <ModalEdit props={consulta} />
                                        </button>
                                        <button className='btn'>
                                            <BsFillTrashFill onClick={() => handleDelete(consulta.id)} />
                                        </button>
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </TabPanel>
                <TabPanel>
                    <table className="table table-striped mt-4">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome do Paciente</th>
                                <th scope="col">Data da Consulta</th>
                                <th scope="col">Hora Início</th>
                                <th scope="col">Hora Fim</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consultData !== undefined && consultData.map((consulta) => (
                                (consulta.status == 'CANCELADA' || consulta.status == 'FINALIZADA' ) &&
                                <tr key={consulta.id}>
                                    <td scope="row">{consulta.id}</td>
                                    <td scope="row">{`${consulta.paciente.primeiroNome} ${consulta.paciente.ultimoNome}`}</td>
                                    <td scope="row">{handleData(consulta.data)}</td>
                                    <td scope="row">{handleHora(consulta.horaInicio)}</td>
                                    <td scope="row">{handleHora(consulta.horaFim)}</td>
                                    <td scope="row">{consulta.status}</td>
                                    <td>
                                        <button className='btn me-3'>
                                            <ConsultaModalView props={consulta}/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Consultas