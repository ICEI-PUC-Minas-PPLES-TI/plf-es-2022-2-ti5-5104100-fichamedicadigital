package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.tisv.fichamedicadigital.entities.Vacina;

@DataJpaTest
public class VacinaRepositoryTest {

	@Autowired
	private VacinaRepository repository;

	private long idExistente;
	private long idNaoExistente;
	private long quantidadeVacinas;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 2L;
		idNaoExistente = 1000L;
		quantidadeVacinas = 0;
	}

	@Test
	public void salvarDevePersistirAVacinaQuandoIdENulo() {
		Vacina vacina = new Vacina();

		vacina = repository.save(vacina);

		Assertions.assertNotNull(vacina.getId());
		Assertions.assertEquals(quantidadeVacinas + 1, vacina.getId());
	}

	@Test
	public void deleteDeveDeletarVacinaQuandoIdExiste() {

		Vacina vacina = new Vacina();
		vacina = repository.save(vacina);

		repository.deleteById(idExistente);

		Optional<Vacina> result = repository.findById(idExistente);
		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(idNaoExistente);
		});

	}

}