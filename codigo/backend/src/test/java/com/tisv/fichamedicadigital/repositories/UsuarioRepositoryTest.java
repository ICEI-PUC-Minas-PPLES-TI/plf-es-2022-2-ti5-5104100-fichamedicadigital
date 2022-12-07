package com.tisv.fichamedicadigital.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.tisv.fichamedicadigital.entities.Usuario;

@DataJpaTest
public class UsuarioRepositoryTest {

	@Autowired
	private UsuarioRepository repository;

	private long idExistente;
	private long idNaoExistente;
	private long quantidadeUsuarios;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 1L;
		idNaoExistente = 1000L;
		quantidadeUsuarios = 1;
	}

	@Test
	public void salvarDevePersistirOUsuarioQuandoIdENulo() {
		Usuario usuario = new Usuario();
		usuario.setEmail("email@gmail.com");
		usuario.setDataNascimento(null);
		usuario.setPassword("senha123");
		usuario.setPrimeiroNome("Teste");
		usuario.setSobreNome("Sobrenome");
		usuario = repository.save(usuario);

		Assertions.assertNotNull(usuario.getId());
		Assertions.assertEquals(quantidadeUsuarios + 1, usuario.getId());
	}

	@Test
	public void deleteDeveDeletarUsuarioQuandoIdExiste() {

		repository.deleteById(idExistente);

		Optional<Usuario> result = repository.findById(idExistente);
		Assertions.assertFalse(result.isPresent());
	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(idNaoExistente);
		});

	}

}
