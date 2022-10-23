package com.tisv.fichamedicadigital.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_fichas_medicas")
public class FichaMedica implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Boolean cardiaco;
	private Boolean diabetico;
	private Boolean internado;
	private Boolean transfusao;
	private Boolean desmaioOuConvulsao;
	private Boolean intoleranciaLactose;

	@LazyCollection(LazyCollectionOption.FALSE)
	@ElementCollection()
	@CollectionTable(name = "tb_doencas")
	private List<String> doencas = new ArrayList<String>();
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@ElementCollection
	@CollectionTable(name = "tb_medicamentos")
	private List<String> medicamentos = new ArrayList<String>();
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@ElementCollection
	@CollectionTable(name = "tb_medicamentos_alergia")
	private List<String> medicamentosAlergia = new ArrayList<String>();

	private String numeroCarteirinha;
	private String convenio;
	private String cartaoSus;
	private String tipoSanguineo;

	@JsonIgnore
	@OneToMany(mappedBy = "fichaMedica")
	private Set<Vacina> vacinas = new HashSet<Vacina>();

	@OneToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Boolean getCardiaco() {
		return cardiaco;
	}

	public void setCardiaco(Boolean cardiaco) {
		this.cardiaco = cardiaco;
	}

	public Boolean getDiabetico() {
		return diabetico;
	}

	public void setDiabetico(Boolean diabetico) {
		this.diabetico = diabetico;
	}

	public Boolean getInternado() {
		return internado;
	}

	public void setInternado(Boolean internado) {
		this.internado = internado;
	}

	public Boolean getTransfusao() {
		return transfusao;
	}

	public void setTransfusao(Boolean transfusao) {
		this.transfusao = transfusao;
	}

	public Boolean getDesmaioOuConvulsao() {
		return desmaioOuConvulsao;
	}

	public void setDesmaioOuConvulsao(Boolean desmaioOuConvulsao) {
		this.desmaioOuConvulsao = desmaioOuConvulsao;
	}

	public Boolean getIntoleranciaLactose() {
		return intoleranciaLactose;
	}

	public void setIntoleranciaLactose(Boolean intoleranciaLactose) {
		this.intoleranciaLactose = intoleranciaLactose;
	}

	public String getNumeroCarteirinha() {
		return numeroCarteirinha;
	}

	public void setNumeroCarteirinha(String numeroCarteirinha) {
		this.numeroCarteirinha = numeroCarteirinha;
	}

	public String getConvenio() {
		return convenio;
	}

	public void setConvenio(String convenio) {
		this.convenio = convenio;
	}

	public String getCartaoSus() {
		return cartaoSus;
	}

	public void setCartaoSus(String cartaoSus) {
		this.cartaoSus = cartaoSus;
	}

	public List<String> getDoencas() {
		return doencas;
	}

	public List<String> getMedicamentos() {
		return medicamentos;
	}

	public List<String> getMedicamentosAlergia() {
		return medicamentosAlergia;
	}

	public Set<Vacina> getVacinas() {
		return vacinas;
	}

	public String getTipoSanguineo() {
		return tipoSanguineo;
	}

	public void setTipoSanguineo(String tipoSanguineo) {
		this.tipoSanguineo = tipoSanguineo;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
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
		FichaMedica other = (FichaMedica) obj;
		return Objects.equals(id, other.id);
	}

}
