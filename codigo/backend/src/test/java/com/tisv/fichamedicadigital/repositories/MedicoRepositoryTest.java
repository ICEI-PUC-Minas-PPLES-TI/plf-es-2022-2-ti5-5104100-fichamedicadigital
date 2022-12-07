package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.tisv.fichamedicadigital.entities.Medico;
import com.tisv.fichamedicadigital.entities.Usuario;

@DataJpaTest
public class MedicoRepositoryTest {

	@Autowired
	private MedicoRepository repository;

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
	public void salvarDevePersistirOMedicoQuandoIdENulo() {
		Usuario usuario = new Usuario();
		usuario.setEmail("email@gmail.com");
		usuario.setDataNascimento(null);
		usuario.setPassword("senha123");
		usuario.setPrimeiroNome("Teste");
		usuario.setSobreNome("Sobrenome");

		Medico medico = new Medico();
		medico.setUsuario(usuario);
		medico = repository.save(medico);

		Assertions.assertNotNull(medico.getId());
		Assertions.assertEquals(quantidadeMedicos + 1, medico.getId());
	}

	@Test
	public void deleteDeveDeletarMedicoQuandoIdExiste() {

		Medico medico = new Medico();
		medico = repository.save(medico);

		repository.deleteById(idExistente);

		Optional<Medico> result = repository.findById(idExistente);
		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(idNaoExistente);
		});

	}

}