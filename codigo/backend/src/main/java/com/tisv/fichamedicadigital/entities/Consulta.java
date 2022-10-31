package com.tisv.fichamedicadigital.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.tisv.fichamedicadigital.dto.ConsultaDTO;
import com.tisv.fichamedicadigital.entities.enums.StatusConsulta;

@Entity
@Table(name = "tb_consultas")
public class Consulta implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Date data;
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Date horaInicio;
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Date horaFim;
	private StatusConsulta status;

	@ManyToOne
	@JoinColumn(name = "paciente_id")
	private Paciente paciente;

	@ManyToOne
	@JoinColumn(name = "medico_id")
	private Medico medico;

	public Consulta() {

	}

	public Consulta(Long id, Date data, Date horarioInicio, Date horaFim, StatusConsulta status, Paciente paciente,
			Medico medico) {
		super();
		this.id = id;
		this.data = data;
		this.horaInicio = horarioInicio;
		this.horaFim = horaFim;
		this.status = status;
		this.paciente = paciente;
		this.medico = medico;
	}

	public Consulta(ConsultaDTO dto) {
		this.data = dto.getData();
		this.horaFim = dto.getHoraFim();
		this.horaInicio = dto.getHoraInicio();
		this.status = dto.getStatus();
		this.paciente = new Paciente(dto.getPaciente());
		this.medico = new Medico(dto.getMedico());
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

	public void setHoraInicio(Date horarioInicio) {
		this.horaInicio = horarioInicio;
	}

	public Date getHoraFim() {
		return horaFim;
	}

	public void setHoraFim(Date horaFim) {
		this.horaFim = horaFim;
	}

	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}

	public Medico getMedico() {
		return medico;
	}

	public void setMedico(Medico medico) {
		this.medico = medico;
	}

	public StatusConsulta getStatus() {
		return status;
	}

	public void setStatus(StatusConsulta status) {
		this.status = status;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Consulta other = (Consulta) obj;
		return Objects.equals(id, other.id);
	}

}
