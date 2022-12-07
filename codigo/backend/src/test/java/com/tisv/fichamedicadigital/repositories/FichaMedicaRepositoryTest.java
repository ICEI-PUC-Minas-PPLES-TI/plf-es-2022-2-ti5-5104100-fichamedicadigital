package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.tisv.fichamedicadigital.entities.FichaMedica;

@DataJpaTest
public class FichaMedicaRepositoryTest {

	@Autowired
	private FichaMedicaRepository repository;

	private long idExistente;
	private long idNaoExistente;
	private long quantidadeMedicos;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 2L;
		idNaoExistente = 1000L;
		quantidadeMedicos = 0;
	}

	@Test
	public void salvarDevePersistirAFichaMedicaQuandoIdENulo() {

		FichaMedica ficha = new FichaMedica();
		ficha = repository.save(ficha);

		Assertions.assertNotNull(ficha.getId());
		Assertions.assertEquals(quantidadeMedicos + 1, ficha.getId());
	}

	@Test
	public void deleteDeveDeletarFichaMedicaQuandoIdExiste() {

		FichaMedica ficha = new FichaMedica();
		ficha = repository.save(ficha);

		repository.deleteById(idExistente);

		Optional<FichaMedica> result = repository.findById(idExistente);
		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(idNaoExistente);
		});

	}

}
