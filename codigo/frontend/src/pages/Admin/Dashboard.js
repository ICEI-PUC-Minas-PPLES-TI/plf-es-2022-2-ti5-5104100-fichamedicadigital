import './Dashboard.css'
import Modal from './DashboardModal'
import ModalEdit from './DashboardModalEdit'
import ModalView from './DashboardModalView'
import { userFindAll, reset, userDelete } from "../../slices/userSlice";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    BsFillTrashFill
} from "react-icons/bs";

const Dashboard = () => {

    const dispatch = useDispatch()
    const { userData } = useSelector((state) => state.user || {})

    useEffect(() => {
        dispatch(userFindAll())
    }, [])

    const handleDelete = (id) => {
        dispatch(userDelete(id))
        setTimeout(function() {
            window.location.reload(1);
          }, 1200)
    }

    return (
        <div id="dashboard" className="mt-4 mb-4">
            <h2>Gerenciamento de Usuários</h2>
            <div className="crud-usuarios">
                <Modal />
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.content != undefined && userData.content.map((user) => (
                            <tr key={user.id}>
                                <td scope="col">{user.id}</td>
                                <td scope="col">{user.primeiroNome}</td>
                                <td scope="col">{user.email}</td>
                                <td scope="col">{user.roles[0].authority == 'ROLE_ADMIN' ? 'ADMIN' : (user.roles[0].authority == 'ROLE_PACIENTE' ? 'PACIENTE' : (user.roles[0].authority == 'ROLE_MEDICO' && 'MÉDICO'))}</td>
                                <td className='actions'>
                                    <button className='btn me-3'>
                                        <ModalView props={user} />
                                    </button>
                                    <button className='btn me-3'>
                                        <ModalEdit props={user}/>
                                    </button>
                                    <button className='btn' onClick={(e) => handleDelete(user.id)}>
                                        <BsFillTrashFill />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard