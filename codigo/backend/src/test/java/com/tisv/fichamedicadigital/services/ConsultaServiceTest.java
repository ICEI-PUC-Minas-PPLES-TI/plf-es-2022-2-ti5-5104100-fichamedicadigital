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

import com.tisv.fichamedicadigital.entities.Consulta;
import com.tisv.fichamedicadigital.repositories.ConsultaRepository;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@ExtendWith(SpringExtension.class)
public class ConsultaServiceTest {

	@InjectMocks
	private ConsultaService service;

	@Mock
	private ConsultaRepository repository;

	private long idExistente;
	private long idNaoExistente;
	private long idDependente;
	private PageImpl<Consulta> page;
	private Consulta consulta;

	@BeforeEach
	void setUp() throws Exception {
		idExistente = 1L;
		idNaoExistente = 2L;
		idDependente = 3L;
		consulta = new Consulta();
		page = new PageImpl<>(List.of(consulta));

		Mockito.when(repository.findById(idNaoExistente)).thenReturn(Optional.empty());
		Mockito.when(repository.findById(idExistente)).thenReturn(Optional.of(consulta));
		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(consulta);
		Mockito.when(repository.findAll((Pageable) ArgumentMatchers.any())).thenReturn(page);

		Mockito.doNothing().when(repository).deleteById(idExistente);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(idNaoExistente);
		Mockito.doThrow(DataIntegrityViolationException.class).when(repository).deleteById(idDependente);
	}

	@Test
	public void deleteDeveLancaExceçãoQuandoIdNaoExiste() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(idNaoExistente);
		});

	}

	@Test
	public void deleteDeveLancaExececaoComIdDependente() {

		Assertions.assertThrows(Exception.class, () -> {
			service.delete(idDependente);
		});

	}

	@Test
	public void findAllPagedDeveRetornarUmaPagina() {

		Pageable pageable = PageRequest.of(0, 10);

		Page<Consulta> result = service.findAllPaged(pageable);

		Assertions.assertNotNull(result);
	}

}
