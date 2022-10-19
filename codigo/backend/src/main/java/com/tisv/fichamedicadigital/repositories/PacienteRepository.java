package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tisv.fichamedicadigital.entities.Paciente;
import com.tisv.fichamedicadigital.entities.Usuario;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {

	Optional<Paciente> findByUsuario(Usuario usuario);
	
}