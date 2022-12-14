package com.tisv.fichamedicadigital.dto;

import java.io.Serializable;
import java.util.Objects;

public class NotificacaoDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private String idConsulta;
	private String descricao;
	private String novoStatus;
	private Long idUsuario;

	public NotificacaoDTO() {

	}

	public String getIdConsulta() {
		return idConsulta;
	}

	public void setIdConsulta(String idConsulta) {
		this.idConsulta = idConsulta;
	}

	public String getNovoStatus() {
		return novoStatus;
	}

	public void setNovoStatus(String novoStatus) {
		this.novoStatus = novoStatus;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idConsulta, novoStatus);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		NotificacaoDTO other = (NotificacaoDTO) obj;
		return Objects.equals(idConsulta, other.idConsulta) && Objects.equals(novoStatus, other.novoStatus);
	}

}
