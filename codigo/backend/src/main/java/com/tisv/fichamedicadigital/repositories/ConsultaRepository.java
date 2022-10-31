package com.tisv.fichamedicadigital.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tisv.fichamedicadigital.entities.Consulta;
import com.tisv.fichamedicadigital.entities.Medico;
import com.tisv.fichamedicadigital.entities.Paciente;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {

	List<Consulta> findByMedico(Medico medico);

	List<Consulta> findByPaciente(Paciente paciente);

	List<Consulta> findByData(Date data);
}