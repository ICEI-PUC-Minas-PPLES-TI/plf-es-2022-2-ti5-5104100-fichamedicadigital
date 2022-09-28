package com.tisv.fichamedicadigital.entities;

import java.util.HashSet;
import java.util.Set;

//@Entity
//@Table(name = "tb_paciente")
public class Paciente extends Usuario {
	private static final long serialVersionUID = 1L;

//	@OneToMany(mappedBy = "paciente")
	private Set<Consulta> consultas = new HashSet<>();

	public Paciente() {

	}

	public Paciente(Long id, String primeiroNome, String sobreNome, String email, String password) {
		super(id, primeiroNome, sobreNome, email, password);
	}

	public void setConsultas(Set<Consulta> consultas) {
		this.consultas = consultas;
	}

}
