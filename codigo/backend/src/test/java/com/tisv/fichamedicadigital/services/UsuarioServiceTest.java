package com.tisv.fichamedicadigital.services;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.tisv.fichamedicadigital.dto.UsuarioDTO;
import com.tisv.fichamedicadigital.entities.Usuario;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;

@ExtendWith(SpringExtension.class)
public class UsuarioServiceTest {

	@InjectMocks
	private UsuarioService service;

	@Mock
	private UsuarioRepository repository;

	private long idExistente;
	private long idNaoExistente;
	private long idDependente;
	private PageImpl<Usuario> page;
	private Usuario usuario;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 1L;
		idNaoExistente = 2L;
		idDependente = 3L;
		usuario = new Usuario();
		page = new PageImpl<>(List.of(usuario));

		Mockito.when(repository.findById(idNaoExistente)).thenReturn(Optional.empty());
		Mockito.when(repository.findById(idExistente)).thenReturn(Optional.of(usuario));
		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(usuario);
		Mockito.when(repository.findAll((Pageable) ArgumentMatchers.any())).thenReturn(page);

		Mockito.doNothing().when(repository).deleteById(idExistente);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(idNaoExistente);
		Mockito.doThrow(DataIntegrityViolationException.class).when(repository).deleteById(idDependente);
	}

	@Test
	public void deleteDeveLancaExceçãoQuandoIdNaoExiste() {

		Assertions.assertThrows(NullPointerException.class, () -> {
			service.delete(idNaoExistente);
		});

	}

	// Usuario com IdDependente sao os que possuem consultas marcadas, por exemplo
	@Test
	public void deleteDeveLancaExececaoComIdDependente() {

		Assertions.assertThrows(Exception.class, () -> {
			service.delete(idDependente);
		});

	}

	@Test
	public void findAllPagedDeveRetornarUmaPagina() {

		Pageable pageable = PageRequest.of(0, 10);

		Page<UsuarioDTO> result = service.findAllPaged(pageable);

		Assertions.assertNotNull(result);
	}

}
