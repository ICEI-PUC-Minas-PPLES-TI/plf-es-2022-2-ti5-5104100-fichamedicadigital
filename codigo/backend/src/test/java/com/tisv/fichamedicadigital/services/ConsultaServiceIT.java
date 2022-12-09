package com.tisv.fichamedicadigital.services;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.entities.Consulta;
import com.tisv.fichamedicadigital.repositories.ConsultaRepository;

@SpringBootTest
@Transactional
public class ConsultaServiceIT {

	@Autowired
	private ConsultaService service;

	@Autowired
	private ConsultaRepository repository;

	private Long idNaoExistente;
	private Long totalDeUsuario;

	@BeforeEach
	void setUp() throws Exception {
		idNaoExistente = 1000L;
		totalDeUsuario = 0L;
	}

	@Test
	public void insertDeveInserirNovaConsulta() {

		Consulta consulta = new Consulta();
		service.insert(consulta);

		Assertions.assertEquals(totalDeUsuario + 1, repository.count());
	}

	@Test
	public void deleteDeveDeletarConsultaExistente() {

		Consulta consulta = new Consulta();
		consulta = service.insert(consulta);

		service.delete(consulta.getId());

		Assertions.assertEquals(1 - 1, repository.count());

	}

	@Test
	public void deleteDeveLancarExcecaoQuandoIdNaoExiste() {

		Assertions.assertThrows(Exception.class, () -> {
			service.delete(idNaoExistente);
		});
	}

	@Test
	public void findAllPagedDeveRetornarVazioQuandoPaginaNaoExiste() {

		PageRequest pageRequest = PageRequest.of(50, 10);

		Page<Consulta> result = service.findAllPaged(pageRequest);

		Assertions.assertTrue(result.isEmpty());

	}

}
