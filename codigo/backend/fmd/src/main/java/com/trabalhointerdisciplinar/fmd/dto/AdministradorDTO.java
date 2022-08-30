package com.trabalhointerdisciplinar.fmd.dto;

import java.io.Serializable;

import com.trabalhointerdisciplinar.fmd.entities.Administrador;

public class AdministradorDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String email;
	private String senha;

	public AdministradorDTO() {

	}

	public AdministradorDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}

	public AdministradorDTO(Administrador entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.senha = entity.getSenha();
		this.email = entity.getEmail();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

}
