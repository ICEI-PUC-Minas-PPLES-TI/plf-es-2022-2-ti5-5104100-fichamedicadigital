package com.tisv.fichamedicadigital.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_vacinas")
public class Vacina implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Date diaVacina;
	private Integer numeroDoses;
	private String nomeVacina;

	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "ficha_medica_id")
	private FichaMedica fichaMedica;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDiaVacina() {
		return diaVacina;
	}

	public void setDiaVacina(Date diaVacina) {
		this.diaVacina = diaVacina;
	}

	public Integer getNumeroDoses() {
		return numeroDoses;
	}

	public void setNumeroDoses(Integer numeroDoses) {
		this.numeroDoses = numeroDoses;
	}

	public String getNomeVacina() {
		return nomeVacina;
	}

	public void setNomeVacina(String nomeVacina) {
		this.nomeVacina = nomeVacina;
	}

	public FichaMedica getFichaMedica() {
		return fichaMedica;
	}

	public void setFichaMedica(FichaMedica fichaMedica) {
		this.fichaMedica = fichaMedica;
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
		Vacina other = (Vacina) obj;
		return Objects.equals(id, other.id);
	}

}
