package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tisv.fichamedicadigital.entities.FichaMedica;
import com.tisv.fichamedicadigital.entities.Usuario;

@Repository
public interface FichaMedicaRepository extends JpaRepository<FichaMedica, Long> {

	Optional<FichaMedica> findByUsuario(Usuario usuario);
	
}