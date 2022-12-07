package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.tisv.fichamedicadigital.entities.Consulta;

@DataJpaTest
public class ConsultaRepositoryTest {

	@Autowired
	private ConsultaRepository repository;

	private long idExistente;
	private long idNaoExistente;
	private long quantidadeConsulta;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 2L;
		idNaoExistente = 1000L;
		quantidadeConsulta = 0;
	}

	@Test
	public void salvarDevePersistirOConsultaQuandoIdENulo() {

		Consulta consulta = new Consulta();
		consulta = repository.save(consulta);

		Assertions.assertNotNull(consulta.getId());
		Assertions.assertEquals(quantidadeConsulta + 1, consulta.getId());
	}

	@Test
	public void deleteDeveDeletarConsultaQuandoIdExiste() {

		Consulta consulta = new Consulta();
		consulta = repository.save(consulta);

		repository.deleteById(idExistente);

		Optional<Consulta> result = repository.findById(idExistente);
		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(idNaoExistente);
		});

	}

}
