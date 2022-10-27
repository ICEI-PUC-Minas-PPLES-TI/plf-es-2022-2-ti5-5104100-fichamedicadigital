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

const Profile = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    
    const {fichaMedica} = useSelector((state) => state.medical)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(medicalFindById(user.id))
    // })

    const handleView = (e) =>{
        e.preventDefault()
    }

    const handleEdit = (e,id) =>{
        e.preventDefault()
    }

    const handleDelete = (e,id) =>{
        e.preventDefault()
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
                    <p>Nome: Rodolfo</p>
                    <p>Sobrenome: Rocha</p>
                    <p>Email: rodolforrodrigues14@gmail.com</p>
                    <p>Data de Nascimento: 14/11/2001</p>
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
                                        <BsFillEyeFill onClick={handleView}/>
                                    </button>
                                    <button className='btn me-3'>
                                        <BsFillPencilFill onClick={handleEdit}/>
                                    </button>
                                    <button className='btn'>
                                        <BsFillTrashFill onClick={handleDelete}/>
                                    </button>
                                </td>
                            </tr>
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