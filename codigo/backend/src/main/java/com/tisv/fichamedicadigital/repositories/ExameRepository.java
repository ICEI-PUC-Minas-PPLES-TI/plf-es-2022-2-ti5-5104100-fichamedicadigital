package com.tisv.fichamedicadigital.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tisv.fichamedicadigital.entities.Exame;
import com.tisv.fichamedicadigital.entities.Usuario;

@Repository
public interface ExameRepository extends JpaRepository<Exame, Long> {

	List<Exame> findByUsuario(Usuario usuario);

}