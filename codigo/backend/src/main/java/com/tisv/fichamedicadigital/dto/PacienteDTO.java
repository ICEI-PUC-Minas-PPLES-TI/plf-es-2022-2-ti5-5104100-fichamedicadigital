package com.tisv.fichamedicadigital.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.tisv.fichamedicadigital.entities.Paciente;

public class PacienteDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private Long idUsuario;
	private String primeiroNome;
	private String ultimoNome;
	private Date dataNascimento;
	private String email;

	private List<ConsultaDTO> consultas = new ArrayList<>();

	public PacienteDTO() {

	}

	public PacienteDTO(Long id, Long idUsuario, String primeiroNome, String ultimoNome, Date dataNascimento,
			String email) {
		this.id = id;
		this.idUsuario = idUsuario;
		this.primeiroNome = primeiroNome;
		this.ultimoNome = ultimoNome;
		this.dataNascimento = dataNascimento;
		this.email = email;
	}

	public PacienteDTO(Paciente entity) {
		this.id = entity.getId();
		this.idUsuario = entity.getUsuario().getId();
		this.primeiroNome = entity.getUsuario().getPrimeiroNome();
		this.ultimoNome = entity.getUsuario().getSobreNome();
		this.dataNascimento = entity.getUsuario().getDataNascimento();
		this.email = entity.getUsuario().getEmail();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getPrimeiroNome() {
		return primeiroNome;
	}

	public void setPrimeiroNome(String primeiroNome) {
		this.primeiroNome = primeiroNome;
	}

	public String getUltimoNome() {
		return ultimoNome;
	}

	public void setUltimoNome(String ultimoNome) {
		this.ultimoNome = ultimoNome;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<ConsultaDTO> getConsultas() {
		return consultas;
	}

}