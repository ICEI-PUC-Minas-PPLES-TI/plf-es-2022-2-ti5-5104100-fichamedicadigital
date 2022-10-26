import './Consultas.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
    BsFillEyeFill,
    BsFillPencilFill,
    BsFillTrashFill
} from "react-icons/bs";
import Modal from './ConsultaModal';

const Consultas = () => {
    return (
        <div id='Consultas'>
            <h1 className='title-consultas mt-4 mb-4 d-flex aligm-self-center'>Consultas</h1>
            <Tabs>
                <TabList>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <Tab className="nav-link">Ativas/Pendentes</Tab>
                        <Tab className="nav-link">Histórico</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <Modal/>
                    <table className="table table-striped mt-4">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome do Paciente</th>
                                <th scope="col">Data da Consulta</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td className='actions'>
                                    <button className='btn me-3'>
                                        <BsFillEyeFill/>
                                    </button>
                                    <button className='btn me-3'>
                                        <BsFillPencilFill/>
                                    </button>
                                    <button className='btn'>
                                        <BsFillTrashFill/>
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
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Consultas