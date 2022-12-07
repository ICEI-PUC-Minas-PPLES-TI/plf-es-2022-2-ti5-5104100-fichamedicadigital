package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.tisv.fichamedicadigital.entities.Consultorio;

@DataJpaTest
public class ConsultorioRepositoryTest {

	@Autowired
	private ConsultorioRepository repository;

	private long idExistente;
	private long idNaoExistente;
	private long quantidadeConsultorio;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 2L;
		idNaoExistente = 1000L;
		quantidadeConsultorio = 0;
	}

	@Test
	public void salvarDevePersistirOConsultorioQuandoIdENulo() {

		Consultorio consultorio = new Consultorio();
		consultorio = repository.save(consultorio);

		Assertions.assertNotNull(consultorio.getId());
		Assertions.assertEquals(quantidadeConsultorio + 1, consultorio.getId());
	}

	@Test
	public void deleteDeveDeletarConsultorioQuandoIdExiste() {

		Consultorio consultorio = new Consultorio();
		consultorio = repository.save(consultorio);

		repository.deleteById(idExistente);

		Optional<Consultorio> result = repository.findById(idExistente);
		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(idNaoExistente);
		});

	}

}
