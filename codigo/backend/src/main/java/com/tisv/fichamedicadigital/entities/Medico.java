package com.tisv.fichamedicadigital.entities;

import java.util.HashSet;
import java.util.Set;

//@Entity
//@Table(name = "tb_medico")
public class Medico extends Usuario {
	private static final long serialVersionUID = 1L;

//	@OneToMany(mappedBy = "medico")
	private Set<Consulta> consultas = new HashSet<>();

	public Medico() {

	}

	public Medico(Long id, String primeiroNome, String sobreNome, String email, String password) {
		super(id, primeiroNome, sobreNome, email, password);
	}
	
	public Medico(Usuario user) {
		super(user.getId(), user.getPrimeiroNome(), user.getSobreNome(), user.getEmail(), user.getPassword());
	}

	public void setConsultas(Set<Consulta> consultas) {
		this.consultas = consultas;
	}

}
