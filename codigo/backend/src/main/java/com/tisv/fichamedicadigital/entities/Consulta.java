package com.tisv.fichamedicadigital.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.tisv.fichamedicadigital.dto.UsuarioDTO;

@Entity
@Table(name = "tb_consultas")
public class Consulta implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String data;
	private String horario;

	private Long idMedico;

	private Long idPaciente;

	private UsuarioDTO paciente;
	private UsuarioDTO medico;

	public Consulta() {

	}

	public Consulta(Long id, Long medico, Long paciente, String data, String horario) {
		this.id = id;
		this.idMedico = medico;
		this.idPaciente = paciente;
		this.data = data;
		this.horario = horario;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public Long getIdMedico() {
		return idMedico;
	}

	public void setIdMedico(Long idMedico) {
		this.idMedico = idMedico;
	}

	public Long getIdPaciente() {
		return idPaciente;
	}

	public void setIdPaciente(Long idPaciente) {
		this.idPaciente = idPaciente;
	}

	public void setPaciente(UsuarioDTO paciente) {
		this.paciente = paciente;
	}

	public void setMedico(UsuarioDTO medico) {
		this.medico = medico;
	}

	public UsuarioDTO getPaciente() {
		return paciente;
	}

	public UsuarioDTO getMedico() {
		return medico;
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
