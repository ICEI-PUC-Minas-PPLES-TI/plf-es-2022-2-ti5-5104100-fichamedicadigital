package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.tisv.fichamedicadigital.entities.Paciente;
import com.tisv.fichamedicadigital.entities.Usuario;

@DataJpaTest
public class PacienteRepositoryTest {

	@Autowired
	private PacienteRepository repository;

	private long idExistente;
	private long idNaoExistente;
	private long quantidadePacientes;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 2L;
		idNaoExistente = 1000L;
		quantidadePacientes = 0;
	}

	@Test
	public void salvarDevePersistirOPacienteQuandoIdENulo() {
		Usuario usuario = new Usuario();
		usuario.setEmail("email@gmail.com");
		usuario.setDataNascimento(null);
		usuario.setPassword("senha123");
		usuario.setPrimeiroNome("Teste");
		usuario.setSobreNome("Sobrenome");

		Paciente paciente = new Paciente();
		paciente.setUsuario(usuario);
		paciente = repository.save(paciente);

		Assertions.assertNotNull(paciente.getId());
		Assertions.assertEquals(quantidadePacientes + 1, paciente.getId());
	}

	@Test
	public void deleteDeveDeletarPacienteQuandoIdExiste() {

		Paciente paciente = new Paciente();
		paciente = repository.save(paciente);
		System.out.println(paciente.getId());

		repository.deleteById(idExistente);

		Optional<Paciente> result = repository.findById(idExistente);
		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(idNaoExistente);
		});

	}

}
