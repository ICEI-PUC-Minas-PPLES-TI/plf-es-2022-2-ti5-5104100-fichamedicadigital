package com.tisv.fichamedicadigital.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tisv.fichamedicadigital.entities.Vacina;

@Repository
public interface VacinaRepository extends JpaRepository<Vacina, Long> {

}