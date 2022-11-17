import './MedicalRecord.css'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userRegister,pacientesFindAll,userFindAll  } from "../../slices/userSlice";
import { reset  } from "../../slices/authSlice";
import { medicalRegister } from "../../slices/medicalSlice";
import { useNavigate } from 'react-router-dom';
import {BsFillPlusCircleFill,BsTrash,BsFillCheckCircleFill} from "react-icons/bs";

const MedicalRecord = () => {

    const navigate = useNavigate()
    
    const steps = [
        {
            id: 'user_data',
            title: "Dados Pessoais",
            progress: "start"
        },
        {
            id: 'medical_data',
            title: "Dados de Saúde",
            progress: "middle"
        },
        {
            id: 'more_medical_data',
            title: "Dados de Saúde",
            progress: "middle2"
        },
        {
            id: 'convenio_data',
            title: "Dados de Convênio",
            progress: "middle3"
        },
        {
            id: 'medicamentos',
            title: "Medicamentos",
            progress: "end"
        },
        {
            id: 'medicamentosAlergia',
            title: "Medicamentos Alergia",
            progress: "end-final"
        },
        {
            id: 'submit',
            title: "Vacinas",
            progress: "submit"
        }
    ];

    const [currentStep, setCurrentStep] = useState(0);

    function handleNextStep() {

        if(currentStep == 0) {
            const user= {
                primeiroNome: name,
                sobreNome: surName,
                dataNascimento: birthdate,
                email: email,
                password: email
            }
        dispatch(userRegister(user))
       
        }
        setCurrentStep((prevState) => prevState + 1);
    }
    function handlePrevStep() {
        setCurrentStep((prevState) => prevState - 1);
    }

    const [name, setName] = useState('');
    const [surName, setSurname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');

    var [cardiaco, setCardiaco] = useState('');
    var [desmaioConvulsao, setDesmaioConvulsao] = useState('');
    const [dataDesmaioConvulsao, setDataDesmaioConvulsao] = useState('false');
    var [diabetico, setDiabetico] = useState('');
    const [medicamentos, setMedicamentos] = useState([]);
    const [medicamentosAlergia, setMedicamentosAlergias] = useState([]);
    const [vacinas, setVacinas] = useState([]);
    const [doencas,setDoencas] = useState([])
    const [tipoSanguineo, setTipoSanguineo] = useState('');
    var [internado, setInternado] = useState('');
    const [internadoMotivo, setInternadoMotivo] = useState('');
    var [intoleranteLactose, setIntoleranteLactose] = useState('');
    var [transfusao, setTransfusao] = useState('');
    const [dataTransfusao, setDataTransfusao] = useState('')
    const [cartaoSus, setCartaoSus] = useState('');
    const [numeroConvenio, setNumeroConvenio] = useState('');
    const [convenio, setConvenio] = useState('');

    const dispatch = useDispatch();

    const findLastId = () => {
        if(usuarios != undefined){
            let indiceArray = usuarios.content.length - 1
            return usuarios.content[indiceArray].id
        } 
    }

    const addInputButton = (e) =>{
        e.preventDefault()

        setMedicamentos([...medicamentos,""])
    }

    const handleChangeMedicamento = (e,index) => {
            medicamentos[index] = e.target.value
            setMedicamentos([...medicamentos])
    }

    const handleRemoveInputMedicamentos = (position) =>{
        setMedicamentos([...medicamentos.filter((_,index) => index != position)])
    }

    const addInputButtonMedicamentosAlergia = (e) =>{
        e.preventDefault()

        setMedicamentosAlergias([...medicamentosAlergia,""])
    }

    const handleChangeMedicamentosAlergia = (e,index) => {
            medicamentosAlergia[index] = e.target.value
            setMedicamentosAlergias([...medicamentosAlergia])
    }

    const handleRemoveInputMedicamentosAlergia = (position) =>{
        setMedicamentosAlergias([...medicamentosAlergia.filter((_,index) => index != position)])
    }

    const addInputButtonDoencas = (e) =>{
        e.preventDefault()

        setDoencas([...doencas,""])
    }

    const handleChangeDoencas = (e,index) => {
        doencas[index] = e.target.value
        setDoencas([...doencas])
    }

    const handleRemoveInputDoencas = (position) =>{
        setDoencas([...doencas.filter((_,index) => index != position)])
    }

    const addInputButtonVacinas = (e) =>{
        e.preventDefault()

        setVacinas([...vacinas,""])
    }
    const [form,setForm] = useState({})

    const handleChangeVacinas = (index) => {
        vacinas[index] = form
        setVacinas([...vacinas])
    }

    const handleRemoveInputVacinas = (position) =>{
        setVacinas([...vacinas.filter((_,index) => index != position)])
    }

    useEffect(() => {
        dispatch(userFindAll())
    },[])
    const usuarios = useSelector((state) => state.user.userData)

    const handleSubmit = (e) => {

        e.preventDefault()
        
        if(desmaioConvulsao == 'true') {
            desmaioConvulsao = true
        } else if(desmaioConvulsao == 'false') {
            desmaioConvulsao = false
        }
        if(cardiaco == 'true') {
            cardiaco = true
        } else if(cardiaco == 'false') {
            cardiaco = false
        }
        if(diabetico == 'true') {
            diabetico = true
        } else if(diabetico == 'false') {
            diabetico = false
        }
        if(internado == 'true') {
            internado = true
        } else if(internado == 'false') {
            internado = false
        }
        if(intoleranteLactose == 'true') {
            intoleranteLactose = true
        } else if(intoleranteLactose == 'false') {
            intoleranteLactose = false
        }
        if(transfusao == 'true') {
            transfusao = true
        } else if(transfusao == 'false') {
            transfusao = false
        }
        let date = new Date()

        for(var i = 0; i<3; i++) {
            var idPaciente = findLastId()
            console.log(idPaciente)
        }
        const medicalData = {
            cardiaco: cardiaco,
            desmaioOuConvulsao: desmaioConvulsao,
            dataDesmaioConvulsao: date.toISOString(dataDesmaioConvulsao),
            diabetico: diabetico,
            internado: internado,
            intoleranciaLactose: intoleranteLactose,
            transfusao:transfusao,
            dataTransfusao: date.toISOString(dataTransfusao),
            cartaoSus: cartaoSus,
            numeroCarteirinha: numeroConvenio,
            convenio: convenio,
            medicamentos: medicamentos,
            medicamentosAlergia: medicamentosAlergia,
            doencas:doencas,
            tipoSanguineo: tipoSanguineo,
            motivoInternado: internadoMotivo,
            vacinas: vacinas,
            usuario: {
                id: idPaciente
            }
        }
        console.log(medicalData)
        dispatch(medicalRegister(medicalData));
        // navigate("/profile")
    }

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <div className="ficha-medica mb-5">
            <h2>Ficha Médica do Paciente</h2>
            <div className="progress">
                <div className="progress-bar" id={steps[currentStep].progress} role="progressbar" aria-valuenow={steps[currentStep].progress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            {steps[currentStep].id === 'user_data' && (
                <div className="fields">
                    <h3>{steps[currentStep].title}</h3>
                    <div className='d-flex justify-content-center mb-3 mt-5'>
                        <label className='form-label w-50'>Nome:</label>
                        <input
                            className='form-control w-50'
                            type="text"
                            placeholder="Nome"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className='d-flex justify-content-center mb-3'>
                        <label className='form-label w-50'>Sobrenome:</label>
                        <input
                            className='form-control w-50'
                            type="text"
                            placeholder="Sobrenome"
                            name="surname"
                            onChange={(e) => setSurname(e.target.value)}
                            value={surName}
                        />
                    </div>
                    <div className='d-flex justify-content-center mb-3'>
                        <label className='form-label w-50'>Email:</label>
                        <input
                            className='form-control w-50'
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className='d-flex justify-content-center mb-3 '>
                        <label className='form-label w-50'>Data de Nascimento:</label>
                        <input
                            className='form-control w-50'
                            type="date"
                            placeholder="Data de Nascimento"
                            name="birthdate"
                            onChange={(e) => setBirthdate(e.target.value)}
                            value={birthdate}
                        />
                    </div>
                </div>
            )}
            {steps[currentStep].id === 'medical_data' && (
                <div className="fields">
                    <h3 className='mb-4'>{steps[currentStep].title}</h3>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <label className='form-label '>Cardíaco:</label>
                        </div>
                        <div className='col-6'>
                            <select className="form-select " aria-label="Default select example" onChange={(e)=> setCardiaco(e.target.value)} value={cardiaco}>
                                <option value="false">SELECIONE</option>
                                <option value="true">SIM</option>
                                <option value="false">NÃO</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <label className='form-label '>Tipo Sanguíneo:</label>
                        </div>
                        <div className='col-6'>
                            <select className="form-select " aria-label="Default select example" onChange={(e)=> setTipoSanguineo(e.target.value)} value={tipoSanguineo}>
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
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <label className='form-label'>Desmaio ou Convulsão:</label>
                        </div>
                        <div className='col-6'>
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setDesmaioConvulsao(e.target.value)} value={desmaioConvulsao}>
                                <option value='false'>SELECIONE</option>
                                <option value='true'>DESMAIO</option>
                                <option value='true'>CONVULSÃO</option>
                            </select>
                        </div>
                    </div>
                    {desmaioConvulsao == 'true'  && 
                        <div className='row mt-3'>
                            <div className='col-6'>
                                <label className='form-label'>Data do Ocorrido:</label>
                            </div>
                            <div className='col-6'>
                                <input type="date" className='form-control' name='dataOcorrido' value={dataDesmaioConvulsao}  onChange={(e) => setDataDesmaioConvulsao(e.target.value)}/>
                            </div>
                        </div>
                    }
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Diabético:</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setDiabetico(e.target.value)} value={diabetico}>
                                <option value="false">SELECIONE</option>
                                <option value="true">SIM</option>
                                <option value="false">NÃO</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Internado:</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setInternado(e.target.value)} value={internado}>
                                <option value="false">SELECIONE</option>
                                <option value="true">SIM</option>
                                <option value="false">NÃO</option>
                            </select>
                        </div>
                    </div>
                    {internado == 'true' &&
                        <div className='row mt-3'>
                            <div className="col-6">
                                <label className='form-label'>Motivo:</label>
                            </div>
                            <div className="col-6">
                                <textarea name="motivo" cols="30" rows="7" placeholder='Informe o motivo da internação...'
                                 onChange={(e)=> setInternadoMotivo(e.target.value)} value={internadoMotivo}>
                                 </textarea>
                            </div>
                        </div>
                     }
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Intorelante à Lactose:</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setIntoleranteLactose(e.target.value)} value={intoleranteLactose}>
                                <option value="false">SELECIONE</option>
                                <option value="true">SIM</option>
                                <option value="false">NÃO</option>
                            </select>
                        </div>                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Transfusão:</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setTransfusao(e.target.value)} value={transfusao}>
                                <option value="false">SELECIONE</option>
                                <option value="true">SIM</option>
                                <option value="false">NÃO</option>
                            </select>
                        </div>
                    </div>
                    {transfusao == "true" && 
                        <div className='row mt-3'>
                            <div className='col-6'>
                                <label className='form-label'>Data da Transfusão:</label>
                            </div>
                            <div className='col-6'>
                                <input type="date" className='form-control' name='dataTransfusao' value={dataTransfusao}  onChange={(e) => setDataTransfusao(e.target.value)}/>
                            </div>
                        </div>
                    }
                </div>
            )}
            {steps[currentStep].id === 'more_medical_data' && (
               <div className="fields">
                    <h3 className='mb-4'>{steps[currentStep].title}</h3>
                    <h5>Doenças</h5>
                    <div className='d-flex justify-content-start'>
                        <button className='btn' onClick={addInputButtonDoencas}><BsFillPlusCircleFill/></button>
                    </div>
                    {
                        doencas.map((doenca,index) => (
                        <div key={index} className='d-flex justify-content-center mt-3'>
                            <input
                                className='form-control w-70'
                                type="text"
                                id={`doenca-${index+1}`}
                                placeholder={`Informe a Doença ${index+1}`}
                                name="doença"
                                onChange={(e) => handleChangeDoencas(e,index)}
                                value={doenca}
                            />
                            <button className='btn' onClick={() =>{handleRemoveInputDoencas(index)}}><BsTrash/></button>
                        </div>
                        ))
                    }
                </div>
            )}
            {steps[currentStep].id === 'convenio_data' && (
                <div className="fields">
                    <h3 className='mb-4'>{steps[currentStep].title}</h3>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Cartão do SUS:</label>
                        </div>
                        <div className="col-6">
                            <input
                                className='form-control'
                                type="text" 
                                onChange={(e)=> setCartaoSus(e.target.value)} 
                                value={cartaoSus}/>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Número do Convênio:</label>
                        </div>
                        <div className="col-6">
                            <input
                                className='form-control'
                                type="text"
                                onChange={(e)=> setNumeroConvenio(e.target.value)} 
                                value={numeroConvenio} />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Convênio:</label>
                        </div>
                        <div className="col-6">
                            <input
                                className='form-control'
                                type="text"
                                onChange={(e)=> setConvenio(e.target.value)} 
                                value={convenio} />
                        </div>
                    </div>
                </div>
            )}
            {steps[currentStep].id === 'medicamentos' && (
               <div className="fields">
                    <h3 className='mb-4'>{steps[currentStep].title}</h3>
                    <div className='d-flex justify-content-start'>
                        <button className='btn btn-medicamentos' onClick={addInputButton}><BsFillPlusCircleFill/></button>
                    </div>
                    {
                        medicamentos.map((medicamento,index) => (
                        <div key={index} className='d-flex justify-content-center mt-3'>
                            <input
                                className='form-control w-70'
                                type="text"
                                id={`medicamento-${index+1}`}
                                placeholder={`Informe o Medicamento ${index+1}`}
                                name="medicamento"
                                onChange={(e) => handleChangeMedicamento(e,index)}
                                value={medicamento}
                            />
                            <button className='btn' onClick={() =>{handleRemoveInputMedicamentos(index)}}><BsTrash/></button>
                        </div>
                        ))
                    }
                </div>
            )}
            {steps[currentStep].id === 'medicamentosAlergia' && (
               <div className="fields">
                    <h3 className='mb-4'>{steps[currentStep].title}</h3>
                    <div className='d-flex justify-content-start'>
                        <button className='btn btn-medicamentos' onClick={addInputButtonMedicamentosAlergia}><BsFillPlusCircleFill/></button>
                    </div>
                    {
                        medicamentosAlergia.map((medicamentoAlergia,index) => (
                        <div key={index} className='d-flex justify-content-center mt-3'>
                            <input
                                className='form-control w-70'
                                type="text"
                                id={`medicamentoAlergia-${index+1}`}
                                placeholder={`Informe o Medicamento Alérgico${index+1}`}
                                name="medicamentoAlérgico"
                                onChange={(e) => handleChangeMedicamentosAlergia(e,index)}
                                value={medicamentoAlergia}
                            />
                            <button className='btn' onClick={() =>{handleRemoveInputMedicamentosAlergia(index)}}><BsTrash/></button>
                        </div>
                        ))
                    }
                </div>
            )}
             {steps[currentStep].id === 'submit' && (
               <div className="fields">
                    <h3 className='mb-4'>{steps[currentStep].title}</h3>
                    <div className='d-flex justify-content-start'>
                        <button className='btn' onClick={addInputButtonVacinas}><BsFillPlusCircleFill/></button>
                    </div>
                    {
                        vacinas.map((vacina,index) => (
                        <div key={index} className='d-flex justify-content-center mt-3'>
                            <input
                                className='form-control w-70'
                                type="text"
                                id={`vacina-${index+1}`}
                                placeholder={`Nome da Vacina ${index+1}`}
                                name="vacina"
                                onChange={ (e) => setForm( { ...form,  nomeVacina: e.target.value } ) }
                            />
                            <input type="number" min="1" id={`vacina-${index+1}`} className='form-control' placeholder='Número de doses' onChange={ (e) => setForm( { ...form,  numeroDoses: e.target.value } ) } />
                            <input type="date" id={`vacina-${index+1}`} className='form-control' onChange={ (e) => setForm( { ...form,  diaVacina: e.target.value } ) } />
                            <button className='btn' onClick={() => {handleChangeVacinas(index)}}><BsFillCheckCircleFill/></button>
                            <button className='btn' onClick={() =>{handleRemoveInputVacinas(index)}}><BsTrash/></button>
                        </div>
                        ))
                    }
                </div>
            )}
            <div className='row position-relative"'>
                {currentStep > 0 && (
                    <div className='col-6 position-absolute start-0'>
                        <button
                            className="btn prev"
                            type="button"
                            onClick={handlePrevStep}
                        >
                            Anterior
                        </button>
                    </div>
                )}
                {currentStep < steps.length - 1 && (
                    <div className='col-6 position-absolute end-0'>
                        <button
                            className="btn next"
                            type="button"
                            onClick={handleNextStep}
                        >
                            Próximo
                        </button>
                    </div>
                )}
                {currentStep === steps.length - 1 && (
                    <div className='col-6 position-absolute end-0'>
                        <button className="btn submit" type="submit" onClick={handleSubmit}>
                            Enviar
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default MedicalRecord