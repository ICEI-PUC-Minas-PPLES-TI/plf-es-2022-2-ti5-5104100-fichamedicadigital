package com.tisv.fichamedicadigital.dto;

import java.io.Serializable;
import java.util.Objects;

import com.tisv.fichamedicadigital.entities.Exame;

public class ExameDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	private String url;
	private String nomeExame;
	private Long idUsuario;

	public ExameDTO() {

	}

	public ExameDTO(Exame exame) {
		this.id = exame.getId();
		this.url = exame.getUrl();
		this.nomeExame = exame.getNomeExame();
		this.idUsuario = exame.getUsuario().getId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getNomeExame() {
		return nomeExame;
	}

	public void setNomeExame(String nomeExame) {
		this.nomeExame = nomeExame;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
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
		ExameDTO other = (ExameDTO) obj;
		return Objects.equals(id, other.id);
	}

}
