package com.tisv.fichamedicadigital.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_pacientes")
public class Paciente implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@JsonIgnore
	@OneToOne(cascade = CascadeType.PERSIST)
	private Usuario usuario;

	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant createdAt;

	@JsonIgnore
	
	@OneToMany(mappedBy = "paciente", fetch = FetchType.EAGER)
	private Set<Consulta> consultas = new HashSet<>();

	public Paciente() {

	}

	public Paciente(Usuario usuario) {
		this.consultas = new HashSet<>();
		this.usuario = usuario;
	}

	public Paciente(Long usuario) {
		this.id = usuario;
	}

	public Paciente(Usuario usuario, Set<Consulta> consultas) {
		this.usuario = usuario;
		this.consultas = consultas;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Set<Consulta> getConsultas() {
		return consultas;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	@PrePersist
	public void prePersist() {
		createdAt = Instant.now();
	}

	@Override
	public int hashCode() {
		return Objects.hash(consultas, usuario);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Paciente other = (Paciente) obj;
		return Objects.equals(consultas, other.consultas) && Objects.equals(usuario, other.usuario);
	}

}
