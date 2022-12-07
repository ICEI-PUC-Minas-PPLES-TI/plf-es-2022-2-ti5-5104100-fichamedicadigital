import './Profile.css'
import MedicalRecordView from '../MedicalRecord/MedicalRecordView';
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
import {pacientesFindAll, userFindById} from '../../slices/userSlice'
import {consultFindById,consultDelete} from '../../slices/consultSlice'
import ModalEdit from '../Admin/DashboardModalEdit';

const Profile = () => {

    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem("user"));
    var userProfile = useSelector((state) => state.user.userProfile)

    var userProfile = {
        ...userProfile,
        roles: [
            {
                id:2
            }
        ]
    }
    let data = new Date(user.dataNascimento);
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
    const pacientes = useSelector((state) => state.user.pacienteData || {})
    const {consultData} = useSelector((state) => state.consult || {})
    const [pacienteId,setPacienteId] = useState('')

    useEffect(() => {
        dispatch(consultFindById(user.id))
        dispatch(pacientesFindAll())
        dispatch(userFindById(user.id))
    },[])

    // const handleData = (date) => {
    //     let data = new Date(date)
    //     return ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
    // }
    // const handleHora = (time) => {
    //     let hora = new Date(time)
    //     return ((hora.getHours() )) + ":" + ((hora.getMinutes()));
    // }
    


    return (
        <div className='profile'>
            <div className='section-profile row'>
                <div className='profile-image col-4'>

                </div>
                <div className='profile-info col-6 ms-5 mt-1'>
                    <p>Nome: {userProfile.primeiroNome}</p>
                    <p>Sobrenome: {userProfile.sobreNome}</p>
                    <p>Email: {userProfile.email}</p>
                    <p>Data de Nascimento: {dataFormatada}</p>
                </div>
                
            </div>
            <button className='btn'>
                    <ModalEdit props={userProfile}/>
                </button>
            <hr />
            <Tabs>
                <TabList>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {/* <Tab className="nav-link">Consultas</Tab> */}
                    <Tab className="nav-link">Fichas Médicas</Tab>
                    </div>
                </TabList>

                {/* <TabPanel>
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
                            {consultData && consultData.map((consulta) => (
                                
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
                </TabPanel> */}
                <TabPanel>
                <select
                    className="form-select w-25" 
                    aria-label="Default select example"
                    onChange={(e) => setPacienteId(e.target.value)}
                    value={pacienteId}>
                        <option value="">----- SELECIONE O PACIENTE -----</option>
                        {pacientes && pacientes.map((paciente) => (
                            <option key={paciente.idUsuario} value={paciente.idUsuario}>{paciente.primeiroNome}</option>
                        ))
                        }
                </select>
                {pacienteId && 
                    <MedicalRecordView props={pacienteId}/>
                }
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Profile