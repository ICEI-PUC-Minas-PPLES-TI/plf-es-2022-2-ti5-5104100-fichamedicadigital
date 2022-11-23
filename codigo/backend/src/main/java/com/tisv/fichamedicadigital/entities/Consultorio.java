//package com.tisv.fichamedicadigital.entities;
//
//import java.io.Serializable;
//import java.util.Objects;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "tb_consultorio")
//public class Consultorio implements Serializable {
//	private static final long serialVersionUID = 1L;
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long id;
//	private Long idMedico;
//	private Long x;
//	private Long y;
//
//	public Consultorio() {
//
//	}
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public Long getIdMedico() {
//		return idMedico;
//	}
//
//	public void setIdMedico(Long idMedico) {
//		this.idMedico = idMedico;
//	}
//
//	public Long getX() {
//		return x;
//	}
//
//	public void setX(Long x) {
//		this.x = x;
//	}
//
//	public Long getY() {
//		return y;
//	}
//
//	public void setY(Long y) {
//		this.y = y;
//	}
//
//	@Override
//	public int hashCode() {
//		return Objects.hash(id);
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Consultorio other = (Consultorio) obj;
//		return Objects.equals(id, other.id);
//	}
//
//}
