import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPencilFill } from 'react-icons/bs'


const MedicalRecordEdit = (fichaMedica) => {

    const medicalData = fichaMedica.props
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    var [cardiaco, setCardiaco] = useState(medicalData.cardiaco);
    var [desmaioConvulsao, setDesmaioConvulsao] = useState(medicalData.desmaioConvulsao);
    const [dataDesmaioConvulsao, setDataDesmaioConvulsao] = useState(medicalData.dataDesmaioConvulsao);
    var [diabetico, setDiabetico] = useState(medicalData.diabetico);
    const [medicamentos, setMedicamentos] = useState(medicalData.medicamentos);
    const [medicamentosAlergia, setMedicamentosAlergias] = useState(medicalData.medicamentosAlergia);
    const [vacinas, setVacinas] = useState(medicalData.vacinas);
    const [doencas, setDoencas] = useState(medicalData.doencas)
    const [tipoSanguineo, setTipoSanguineo] = useState(medicalData.tipoSanguineo);
    var [internado, setInternado] = useState(medicalData.internado);
    const [internadoMotivo, setInternadoMotivo] = useState(medicalData.internadoMotivo);
    var [intoleranteLactose, setIntoleranteLactose] = useState(medicalData.intoleranteLactose);
    var [transfusao, setTransfusao] = useState(medicalData.transfusao);
    const [dataTransfusao, setDataTransfusao] = useState(medicalData.dataTransfusao)
    const [cartaoSus, setCartaoSus] = useState(medicalData.cartaoSus);
    const [numeroConvenio, setNumeroConvenio] = useState(medicalData.numeroConvenio);
    const [convenio, setConvenio] = useState(medicalData.convenio);


    const handleEdit = () => {
        handleShow()
    }

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

    const handleSubmit = (e) => {
        e.preventDefault()


        // setTimeout(function() {
        //     window.location.reload(1);
        //   }, 1200);
    }

    return (
        <>
            <div>

                <BsFillPencilFill onClick={handleEdit} />
                <Modal show={show} onHide={handleClose} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title> <span className='title'>Editar Ficha Médica</span> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                                        <label className='form-label'>Cartão Sus</label>
                                        <input
                                            className='form-control'
                                            type="text"
                                            onChange={(e) => setCartaoSus(e.target.value)}
                                            value={cartaoSus} />                                    </div>
                                    <div className='col-4'>
                                        <label className='form-label'>Número Carteirinha</label>
                                        <input
                                            className='form-control'
                                            type="text"
                                            onChange={(e) => setNumeroConvenio(e.target.value)}
                                            value={numeroConvenio} />                                    </div>
                                    <div className='col-4'>
                                        <label className='form-label'>Convênio</label>
                                        <input
                                            className='form-control'
                                            type="text"
                                            onChange={(e) => setConvenio(e.target.value)}
                                            value={convenio} />                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='row mt-3'>
                                <h3 className='d-flex justify-content-center mt-3 mb-3'>Dados de Saúde</h3>
                                <div className='col-3'>
                                    <label className='form-label'>Tipo Sanguíneo</label>
                                    <select className="form-select " aria-label="Default select example" onChange={(e) => setTipoSanguineo(e.target.value)} value={tipoSanguineo}>
                                        <option value="">SELECIONE</option>
                                        <option value="A+">A+</option>
                                        <option value="B+">B+</option>
                                        <option value="AB+">AB+</option>
                                        <option value="O+">O+</option>
                                        <option value="A-">A-</option>
                                        <option value="B-">B-</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label'>Intolerante à Lactose</label>
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => setIntoleranteLactose(e.target.value)} value={intoleranteLactose}>
                                        <option value="">SELECIONE</option>
                                        <option value="true">SIM</option>
                                        <option value="false">NÃO</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label'>Diabetico</label>
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => setDiabetico(e.target.value)} value={diabetico}>
                                        <option value="">SELECIONE</option>
                                        <option value="true">SIM</option>
                                        <option value="false">NÃO</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label'>Cardíaco</label>
                                    <select className="form-select " aria-label="Default select example" onChange={(e) => setCardiaco(e.target.value)} value={cardiaco}>
                                        <option value="">SELECIONE</option>
                                        <option value="true">SIM</option>
                                        <option value="false">NÃO</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-3'>
                                    <label className='form-label'>Transfusão</label>
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => setTransfusao(e.target.value)} value={transfusao}>
                                        <option value="">SELECIONE</option>
                                        <option value="true">SIM</option>
                                        <option value="false">NÃO</option>
                                    </select>
                                    {medicalData.transfusao == true &&
                                        <input type="text" className='form-control mt-3 w-50' disabled value={handleDataTransfusao(medicalData.dataTransfusao)} />
                                    }
                                </div>
                                <div className='col-3'>
                                    <label className='form-label'>Desmaio/Convulsão</label>
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => setDesmaioConvulsao(e.target.value)} value={desmaioConvulsao}>
                                        <option value=''>SELECIONE</option>
                                        <option value='true'>DESMAIO</option>
                                        <option value='true'>CONVULSÃO</option>
                                    </select>                                    {medicalData.desmaioOuConvulsao == true &&
                                        <input type="date" className='form-control' name='dataOcorrido' value={dataDesmaioConvulsao} onChange={(e) => setDataDesmaioConvulsao(e.target.value)} />
                                    }
                                </div>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <label className='form-label'>Internado</label>
                                            <select className="form-select" aria-label="Default select example" onChange={(e) => setInternado(e.target.value)} value={internado}>
                                                <option value="">SELECIONE</option>
                                                <option value="true">SIM</option>
                                                <option value="false">NÃO</option>
                                            </select>
                                        </div>
                                        <div className='col-8 pt-4'>
                                            {medicalData.internado == true &&
                                                <textarea disabled cols="40" rows="5" value={medicalData.motivoInternado}></textarea>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <h3 className='d-flex justify-content-center mt-3 mb-3'>Doenças</h3>
                                {medicalData.doencas != '' ? medicalData.doencas.map((doenca) => (
                                    <div className='col-3'>
                                        <input type="text" className='form-control w-50' disabled value={doenca} />
                                    </div>
                                )) : (
                                    <p>Nenhuma doença cadastrada!</p>
                                )}
                            </div>
                            <div className='row mt-4'>
                                <h3 className='d-flex justify-content-center mt-3 mb-3'>Medicamentos</h3>
                                {medicalData.medicamentos != '' ? medicalData.medicamentos.map((medicamento) => (
                                    <div className='col-3'>
                                        <input type="text" className='form-control w-50' disabled value={medicamento} />
                                    </div>
                                )) : (
                                    <p className='d-flex justify-content-center mt-4'>Nenhum medicamento cadastrado!</p>
                                )}
                            </div>
                            <div className='row mt-4'>
                                <h3 className='d-flex justify-content-center mt-3 mb-3'>Medicamentos Alergia</h3>
                                {medicalData.medicamentosAlergia != '' ? medicalData.medicamentosAlergia.map((medicamentoAlergia) => (
                                    <div className='col-3'>
                                        <input type="text" className='form-control w-50' disabled value={medicamentoAlergia} />
                                    </div>
                                )) : (
                                    <p className='d-flex justify-content-center mt-4'>Nenhum medicamento cadastrado!</p>
                                )}
                            </div>
                            <div className='row mt-4'>
                                <h3 className='d-flex justify-content-center mt-3 mb-3'>Vacinas</h3>
                                {medicalData.vacinas != '' ? medicalData.vacinas.map((vacina) => (
                                    <div className='col-6 d-flex justify-contetn-center border pt-3 pb-3' key={vacina.id}>
                                        <input type="text" className='form-control me-3' disabled value={vacina.nomeVacina} />
                                        <input type="text" className='form-control me-3' disabled value={`Doses: ${vacina.numeroDoses}`} />
                                        <input type="text" className='form-control' disabled value={handleData(vacina.diaVacina)} />
                                    </div>
                                )) : (
                                    <p className='d-flex justify-content-center mt-4'>Nenhuma vacina cadastrada!</p>
                                )}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="secondary" onClick={handleSubmit}>
                            Atualizar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default MedicalRecordEdit