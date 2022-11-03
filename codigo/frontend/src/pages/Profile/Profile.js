import './Profile.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
    BsPlusCircleFill,
    BsFillEyeFill,
    BsFillPencilFill,
    BsFillTrashFill
} from "react-icons/bs";
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import {reset,medicalFindById} from '../../slices/medicalSlice'
import {consultFindById,consultDelete} from '../../slices/consultSlice'

const Profile = () => {

    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("user"));
    let data = new Date( user.dataNascimento);
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
    const {fichaMedica} = useSelector((state) => state.medical)

    const {consultData} = useSelector((state) => state.consult || {})

    
    useEffect(() => {
        // dispatch(medicalFindById(user.id))
        dispatch(consultFindById(user.id))
    },[])

    const handleData = (date) => {
        let data = new Date(date)
        return ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
    }
    const handleHora = (time) => {
        let hora = new Date(time)
        return ((hora.getHours() )) + ":" + ((hora.getMinutes()));
    }

    const handleView = (e) =>{
        e.preventDefault()
    }

    const handleEdit = (e,id) =>{
        e.preventDefault()
    }

    const handleDelete = (id) =>{
        dispatch(consultDelete(id))
    }

    const handleViewFicha = (e) =>{
        e.preventDefault()
    }
    
    const handleEditFicha = (e,id) =>{
        e.preventDefault()
    }

    return (
        <div className='profile'>
            <div className='section-profile row'>
                <div className='profile-image col-4'>

                </div>
                <div className='profile-info col-6 ms-5 mt-1'>
                    <p>Nome: {user.primeiroNome}</p>
                    <p>Sobrenome: {user.sobreNome}</p>
                    <p>Email: {user.email}</p>
                    <p>Data de Nascimento: {dataFormatada}</p>
                </div>
            </div>
            <hr />
            <Tabs>
                <TabList>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <Tab className="nav-link">Consultas</Tab>
                    <Tab className="nav-link">Fichas Médicas</Tab>
                    </div>
                </TabList>

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
                                <th scope="col">Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            {consultData !== undefined && consultData.map((consulta) => (
                                
                                <tr key={consulta.id}>
                                    <td scope="row">{consulta.id}</td>
                                    <td scope="row">{consulta.paciente.primeiroNome}</td>
                                    <td scope="row">{handleData(consulta.data)}</td>
                                    <td scope="row">{handleHora(consulta.horaInicio)}</td>
                                    <td scope="row">{handleHora(consulta.horaFim)}</td>
                                    <td scope="row">{consulta.status}</td>
                                    <td scope="row" className='actions'>
                                        <button className='btn me-3'>
                                            <BsFillEyeFill onClick={handleView}/>
                                        </button>
                                        <button className='btn me-3'>
                                            <BsFillPencilFill onClick={handleEdit}/>
                                        </button>
                                        <button className='btn'>
                                            <BsFillTrashFill onClick={() => handleDelete(consulta.id)}/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
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
                                <th scope="col">Hora da Consulta</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Edson Junior</td>
                                <td>24/10/2022</td>
                                <td>12:00:00</td>
                                <td>Ativa</td>
                                <td className='actions'>
                                    <button className='btn me-3'>
                                        <BsFillEyeFill onClick={handleViewFicha}/>
                                    </button>
                                    <button className='btn me-3'>
                                        <BsFillPencilFill onClick={handleEditFicha}/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Profile