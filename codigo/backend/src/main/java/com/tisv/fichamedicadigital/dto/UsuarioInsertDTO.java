package com.tisv.fichamedicadigital.dto;

import com.tisv.fichamedicadigital.services.validation.UsuarioInsertValid;

@UsuarioInsertValid
public class UsuarioInsertDTO extends UsuarioDTO {
	private static final long serialVersionUID = 1L;

	private String password;

	public UsuarioInsertDTO() {
		super();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}