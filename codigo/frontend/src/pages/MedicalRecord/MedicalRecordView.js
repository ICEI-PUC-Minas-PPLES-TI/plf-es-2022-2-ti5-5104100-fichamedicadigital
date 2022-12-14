import './MedicalRecord.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { medicalFindById, medicalUpdate } from '../../slices/medicalSlice'
import MedicalRecordEdit from './MedicalRecordEdit'


const MedicalRecordView = (idPaciente) => {

    const dispatch = useDispatch()
    const { medicalData } = useSelector((state) => state.medical)

    useEffect(() => {
        dispatch(medicalFindById(idPaciente.props))
    }, [])

    const handleData = (date) => {
        let data = new Date(date)
        return data.getDate() + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()
    }
    const handleDataDesmaioConvulsao = (date) => {
        let desmaioOuConvulsaoData = new Date(date)
        return desmaioOuConvulsaoData.getDate() + "/" + ((desmaioOuConvulsaoData.getMonth() + 1)) + "/" + desmaioOuConvulsaoData.getFullYear()
    }
    const handleDataTransfusao = (date) => {
        let transfusaoData = new Date(date)
        return transfusaoData.getDate() + "/" + ((transfusaoData.getMonth() + 1)) + "/" + transfusaoData.getFullYear()
    }

    return (medicalData.usuario ? (
        <div className='ficha row mt-4 mb-5'>
            <div className='row mb-5'>
                <h3 className='d-flex justify-content-center mt-3 mb-3'>#id_{`${medicalData.usuario.id}`} - Dados do Paciente </h3>
                <div className='row mt-3'>
                    <div className='col-4'>
                        <label className='form-label'>Nome:</label>
                        <input type="text" className='form-control' value={`${medicalData.usuario.primeiroNome}  ${medicalData.usuario.sobreNome}`} disabled />
                    </div>
                    <div className='col-4'>
                        <label className='form-label'>E-mail::</label>
                        <input type="text" className='form-control' value={medicalData.usuario.email} disabled />
                    </div>
                    <div className='col-4'>
                        <label className='form-label'>Data de Nascimento:</label>
                        <input type="text" className='form-control' value={handleData(medicalData.usuario.dataNascimento)} disabled />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-4 '>
                        <label className='form-label'>Cart??o Sus</label>
                        <input type="text" className='form-control' disabled value={medicalData.cartaoSus} />
                    </div>
                    <div className='col-4'>
                        <label className='form-label'>N??mero Carteirinha</label>
                        <input type="text" className='form-control' disabled value={medicalData.numeroCarteirinha} />
                    </div>
                    <div className='col-4'>
                        <label className='form-label'>Conv??nio</label>
                        <input type="text" className='form-control' disabled value={medicalData.convenio} />
                    </div>
                </div>
            </div>
            <hr />
            <div className='row mt-3'>
                <h3 className='d-flex justify-content-center mt-3 mb-3'>Dados de Sa??de</h3>
                <div className='col-3'>
                    <label className='form-label'>Tipo Sangu??neo</label>
                    <input type="text" className='form-control w-50' disabled value={medicalData.tipoSanguineo} />
                </div>
                <div className='col-3'>
                    <label className='form-label'>Intolerante ?? Lactose</label>
                    <input type="text" className='form-control w-50' disabled value={medicalData.intoleranciaLactose == true ? 'SIM' : 'N??O'} />
                </div>
                <div className='col-3'>
                    <label className='form-label'>Diabetico</label>
                    <input type="text" className='form-control w-50' disabled value={medicalData.diabetico == true ? 'SIM' : 'N??O'} />
                </div>
                <div className='col-3'>
                    <label className='form-label'>Card??aco</label>
                    <input type="text" className='form-control w-50' disabled value={medicalData.cardiaco == true ? 'SIM' : 'N??O'} />
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-3'>
                    <label className='form-label'>Transfus??o</label>
                    <input type="text" className='form-control w-50' disabled value={medicalData.transfusao == true ? 'SIM' : 'N??O'} />
                    {medicalData.transfusao == true &&
                        <input type="text" className='form-control mt-3 w-50' disabled value={handleDataTransfusao(medicalData.dataTransfusao)} />
                    }
                </div>
                <div className='col-3'>
                    <label className='form-label'>Desmaio/Convuls??o</label>
                    <input type="text" className='form-control w-50' disabled value={medicalData.desmaioOuConvulsao == true ? 'SIM' : 'N??O'} />
                    {medicalData.desmaioOuConvulsao == true &&
                        <input type="text" className='form-control mt-3 w-50' disabled value={handleDataDesmaioConvulsao(medicalData.dataDesmaioConvulsao)} />
                    }
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4'>
                            <label className='form-label'>Internado</label>
                            <input type="text" className='form-control w-50' disabled value={medicalData.internado == true ? 'SIM' : 'N??O'} />
                        </div>
                        <div className='col-8 pt-4'>
                            {medicalData.internado == true &&
                                <textarea disabled cols="40" rows="5"  value={medicalData.motivoInternado}></textarea>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <h3 className='d-flex justify-content-center mt-3 mb-3'>Doen??as</h3>
                {medicalData.doencas != '' ?  medicalData.doencas.map((doenca)=> (
                    <div className='col-3'>
                        <input type="text" className='form-control w-50' disabled value={doenca}/>
                    </div>
                )) : (
                    <p>Nenhuma doen??a cadastrada!</p>
                )}
            </div>
            <div className='row mt-4'>
                <h3 className='d-flex justify-content-center mt-3 mb-3'>Medicamentos</h3>
                {medicalData.medicamentos != '' ? medicalData.medicamentos.map((medicamento)=> (
                    <div className='col-3'>
                        <input type="text" className='form-control w-50' disabled value={medicamento}/>
                    </div>
                )) : (
                    <p className='d-flex justify-content-center mt-4'>Nenhum medicamento cadastrado!</p>
                )}
            </div>
            <div className='row mt-4'>
                <h3 className='d-flex justify-content-center mt-3 mb-3'>Medicamentos Alergia</h3>
                {medicalData.medicamentosAlergia != '' ? medicalData.medicamentosAlergia.map((medicamentoAlergia)=> (
                    <div className='col-3'>
                        <input type="text" className='form-control w-50' disabled value={medicamentoAlergia}/>
                    </div>
                )) : (
                    <p className='d-flex justify-content-center mt-4'>Nenhum medicamento cadastrado!</p>
                )}
            </div>
            <div className='row mt-4'>
                <h3 className='d-flex justify-content-center mt-3 mb-3'>Vacinas</h3>
                {medicalData.vacinas != '' ? medicalData.vacinas.map((vacina)=> (
                    <div className='col-6 d-flex justify-contetn-center border pt-3 pb-3' key={vacina.id}>
                        <input type="text" className='form-control me-3' disabled value={vacina.nomeVacina}/>
                        <input type="text" className='form-control me-3' disabled value={`Doses: ${vacina.numeroDoses}`}/>
                        <input type="text" className='form-control' disabled value={handleData(vacina.diaVacina)}/>
                    </div>
                )) : (
                    <p className='d-flex justify-content-center mt-4'>Nenhuma vacina cadastrada!</p>
                )}
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn mt-4 editar-ficha '> 
                    <MedicalRecordEdit props={medicalData}/>
                </button>
            </div>
        </div>
    ) : (
        <div className='d-flex justify-content-center mt-5'>
            Nenhuma Ficha M??dica cadastrada para esse paciente!
        </div>
    )
    )
}

export default MedicalRecordView