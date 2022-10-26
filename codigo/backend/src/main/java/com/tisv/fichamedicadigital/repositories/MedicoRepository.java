package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tisv.fichamedicadigital.entities.Medico;
import com.tisv.fichamedicadigital.entities.Usuario;

@Repository
public interface MedicoRepository extends JpaRepository<Medico, Long> {

	Optional<Medico> findByUsuario(Usuario usuario);
	
}