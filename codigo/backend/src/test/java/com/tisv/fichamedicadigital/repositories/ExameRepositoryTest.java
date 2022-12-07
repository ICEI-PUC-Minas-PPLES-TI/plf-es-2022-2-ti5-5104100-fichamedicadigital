package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.tisv.fichamedicadigital.entities.Exame;

@DataJpaTest
public class ExameRepositoryTest {

	@Autowired
	private ExameRepository repository;

	private long idExistente;
	private long idNaoExistente;
	private long quantidadeExame;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 2L;
		idNaoExistente = 1000L;
		quantidadeExame = 0;
	}

	@Test
	public void salvarDevePersistirOExameQuandoIdENulo() {

		Exame exame = new Exame();
		exame = repository.save(exame);

		Assertions.assertNotNull(exame.getId());
		Assertions.assertEquals(quantidadeExame + 1, exame.getId());
	}

	@Test
	public void deleteDeveDeletarExameQuandoIdExiste() {

		Exame exame = new Exame();
		exame = repository.save(exame);

		repository.deleteById(idExistente);

		Optional<Exame> result = repository.findById(idExistente);
		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(idNaoExistente);
		});

	}

}
