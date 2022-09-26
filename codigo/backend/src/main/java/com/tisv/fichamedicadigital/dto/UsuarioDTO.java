package com.tisv.fichamedicadigital.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.tisv.fichamedicadigital.entities.Usuario;

public class UsuarioDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank(message = "Campo obrigatório")
	private String primeiroNome;
	private String sobreNome;

	@Email(message = "Favor entrar com email válido")
	private String email;

	Set<RoleDTO> roles = new HashSet<>();

	public UsuarioDTO() {

	}

	public UsuarioDTO(Long id, String primeiroNome, String sobreNome, String email, String password) {
		this.id = id;
		this.primeiroNome = primeiroNome;
		this.sobreNome = sobreNome;
		this.email = email;
	}

	public UsuarioDTO(Usuario entity) {
		id = entity.getId();
		primeiroNome = entity.getPrimeiroNome();
		sobreNome = entity.getSobreNome();
		email = entity.getEmail();
		entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPrimeiroNome() {
		return primeiroNome;
	}

	public void setPrimeiroNome(String primeiroNome) {
		this.primeiroNome = primeiroNome;
	}

	public String getSobreNome() {
		return sobreNome;
	}

	public void setSobreNome(String sobreNome) {
		this.sobreNome = sobreNome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<RoleDTO> getRoles() {
		return roles;
	}

}
