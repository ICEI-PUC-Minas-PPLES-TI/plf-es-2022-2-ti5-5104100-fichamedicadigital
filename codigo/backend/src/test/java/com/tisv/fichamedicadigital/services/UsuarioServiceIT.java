package com.tisv.fichamedicadigital.services;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.dto.UsuarioDTO;
import com.tisv.fichamedicadigital.dto.UsuarioInsertDTO;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;

@SpringBootTest
@Transactional
public class UsuarioServiceIT {

	@Autowired
	private UsuarioService service;

	@Autowired
	private UsuarioRepository repository;

	private Long idExistente;
	private Long idNaoExistente;
	private Long totalDeUsuario;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 5L;
		idNaoExistente = 1000L;
		totalDeUsuario = 4L;
	}

	@Test
	public void insertDeveInserirNovoUsuario() {
		UsuarioInsertDTO user = new UsuarioInsertDTO();
		user.setEmail("testando123@gmail.com");
		user.setPrimeiroNome("testea");
		user.setSobreNome("olaola");
		user.setPassword("saatset");
		service.insert(user);

		Assertions.assertEquals(totalDeUsuario + 1, repository.count());
	}

	@Test
	public void deleteDeveDeletarUsuarioExistente() {

		UsuarioInsertDTO user = new UsuarioInsertDTO();
		user.setEmail("testando123@gmail.com");
		user.setPrimeiroNome("testea");
		user.setSobreNome("olaola");
		user.setPassword("saatset");
		totalDeUsuario++;
		service.insert(user);

		service.delete(idExistente);

		Assertions.assertEquals(totalDeUsuario - 1, repository.count());

	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {

		Assertions.assertThrows(Exception.class, () -> {
			service.delete(idNaoExistente);
		});
	}

	@Test
	public void findAllPagedDeveRetornarUmaPaginaDeUsuarios() {

		PageRequest pageRequest = PageRequest.of(0, 3);

		Page<UsuarioDTO> result = service.findAllPaged(pageRequest);

		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(0, result.getNumber());
		Assertions.assertEquals(3, result.getSize());
		Assertions.assertEquals(totalDeUsuario, result.getTotalElements());
	}

	@Test
	public void findAllPagedDeveRetornarVazioQuandoPaginaNaoExiste() {

		PageRequest pageRequest = PageRequest.of(50, 10);

		Page<UsuarioDTO> result = service.findAllPaged(pageRequest);

		Assertions.assertTrue(result.isEmpty());

	}

}
