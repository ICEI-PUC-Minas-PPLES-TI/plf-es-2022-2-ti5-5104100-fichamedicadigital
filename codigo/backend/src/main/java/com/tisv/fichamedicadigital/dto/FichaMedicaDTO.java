package com.tisv.fichamedicadigital.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.tisv.fichamedicadigital.entities.FichaMedica;
import com.tisv.fichamedicadigital.entities.Vacina;

public class FichaMedicaDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	private Boolean cardiaco;
	private Boolean diabetico;
	private Boolean internado;
	private Boolean transfusao;
	private Boolean desmaioOuConvulsao;
	private Boolean intoleranciaLactose;

	private List<String> doencas = new ArrayList<String>();

	private List<String> medicamentos = new ArrayList<String>();

	private List<String> medicamentosAlergia = new ArrayList<String>();

	private String numeroCarteirinha;
	private String convenio;
	private String cartaoSus;
	private String tipoSanguineo;
	private String motivoInternado;

	private Date dataTransfusao;
	private Date dataDesmaioConvulsao;

	private Set<Vacina> vacinas = new HashSet<Vacina>();

	private UsuarioDTO usuario;

	public FichaMedicaDTO() {

	}

	public FichaMedicaDTO(FichaMedica ficha) {
		this.id = ficha.getId();
		this.cardiaco = ficha.getCardiaco();
		this.diabetico = ficha.getDiabetico();
		this.internado = ficha.getInternado();
		this.transfusao = ficha.getTransfusao();
		this.desmaioOuConvulsao = ficha.getDesmaioOuConvulsao();
		this.intoleranciaLactose = ficha.getIntoleranciaLactose();
		this.setDoencas(ficha.getDoencas());
		this.setMedicamentos(ficha.getMedicamentos());
		this.setMedicamentosAlergia(ficha.getMedicamentosAlergia());
		this.numeroCarteirinha = ficha.getNumeroCarteirinha();
		this.convenio = ficha.getConvenio();
		this.cartaoSus = ficha.getCartaoSus();
		this.tipoSanguineo = ficha.getTipoSanguineo();
		this.setVacinas(ficha.getVacinas());
		this.usuario = new UsuarioDTO(ficha.getUsuario());
		this.motivoInternado = ficha.getMotivoInternado();
		this.dataTransfusao = ficha.getDataTransfusao();
		this.dataDesmaioConvulsao = ficha.getDataDesmaio();

	}

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

	public List<String> getDoencas() {
		return doencas;
	}

	public void setDoencas(List<String> doencas) {
		this.doencas = doencas;
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

	public String getTipoSanguineo() {
		return tipoSanguineo;
	}

	public void setTipoSanguineo(String tipoSanguineo) {
		this.tipoSanguineo = tipoSanguineo;
	}

	public UsuarioDTO getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioDTO usuario) {
		this.usuario = usuario;
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

	public void setMedicamentos(List<String> medicamentos) {
		this.medicamentos = medicamentos;
	}

	public void setMedicamentosAlergia(List<String> medicamentosAlergia) {
		this.medicamentosAlergia = medicamentosAlergia;
	}

	public void setVacinas(Set<Vacina> vacinas) {
		this.vacinas = vacinas;
	}

	public String getMotivoInternado() {
		return motivoInternado;
	}

	public void setMotivoInternado(String motivoInternado) {
		this.motivoInternado = motivoInternado;
	}

	public Date getDataTransfusao() {
		return dataTransfusao;
	}

	public void setDataTransfusao(Date dataTransfusao) {
		this.dataTransfusao = dataTransfusao;
	}

	public Date getDataDesmaioConvulsao() {
		return dataDesmaioConvulsao;
	}

	public void setDataDesmaioConvulsao(Date dataDesmaioConvulsao) {
		this.dataDesmaioConvulsao = dataDesmaioConvulsao;
	}

}
