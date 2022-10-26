package com.tisv.fichamedicadigital.dto;

import java.io.Serializable;
import java.util.Date;

import com.tisv.fichamedicadigital.entities.Consulta;
import com.tisv.fichamedicadigital.entities.enums.StatusConsulta;

public class ConsultaDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Date data;
	private Date horaInicio;
	private Date horaFim;
	private StatusConsulta status;
	private PacienteDTO paciente;
	private MedicoDTO medico;

	public ConsultaDTO() {

	}

	public ConsultaDTO(Consulta entity) {
		this.id = entity.getId();
		this.data = entity.getData();
		this.horaInicio = entity.getHoraInicio();
		this.horaFim = entity.getHoraFim();
		this.status = entity.getStatus();
		this.paciente = new PacienteDTO(entity.getPaciente());
		this.medico = new MedicoDTO(entity.getMedico());
	}

	public ConsultaDTO(Long id, Date data, Date horaInicio, Date horaFim, StatusConsulta status, PacienteDTO paciente,
			MedicoDTO medico) {
		this.id = id;
		this.data = data;
		this.horaInicio = horaInicio;
		this.horaFim = horaFim;
		this.status = status;
		this.paciente = paciente;
		this.medico = medico;

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Date getHoraInicio() {
		return horaInicio;
	}

	public void setHoraInicio(Date horaInicio) {
		this.horaInicio = horaInicio;
	}

	public Date getHoraFim() {
		return horaFim;
	}

	public void setHoraFim(Date horaFim) {
		this.horaFim = horaFim;
	}

	public StatusConsulta getStatus() {
		return status;
	}

	public void setStatus(StatusConsulta status) {
		this.status = status;
	}

	public PacienteDTO getPaciente() {
		return paciente;
	}

	public void setPaciente(PacienteDTO paciente) {
		this.paciente = paciente;
	}

	public MedicoDTO getMedico() {
		return medico;
	}

	public void setMedico(MedicoDTO medico) {
		this.medico = medico;
	}

}
