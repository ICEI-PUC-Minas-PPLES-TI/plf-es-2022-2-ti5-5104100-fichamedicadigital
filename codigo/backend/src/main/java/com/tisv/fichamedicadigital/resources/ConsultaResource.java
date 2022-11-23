package com.tisv.fichamedicadigital.resources;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tisv.fichamedicadigital.dto.ConsultaDTO;
import com.tisv.fichamedicadigital.dto.NotificacaoDTO;
import com.tisv.fichamedicadigital.entities.Consulta;
import com.tisv.fichamedicadigital.entities.enums.StatusConsulta;
import com.tisv.fichamedicadigital.services.ConsultaService;
import com.tisv.fichamedicadigital.services.RabbitMQService;

@RestController
@RequestMapping(value = "/consultas")
public class ConsultaResource {

	@Autowired
	private ConsultaService service;

	@Autowired
	private RabbitMQService rabbitService;

	@GetMapping
	public ResponseEntity<List<ConsultaDTO>> findAll(Pageable pageable) {
		Page<Consulta> list = service.findAllPaged(pageable);
		List<ConsultaDTO> retorno = new ArrayList<>();
		for (Consulta consulta : list) {
			retorno.add(new ConsultaDTO(consulta));
		}
		return ResponseEntity.ok().body(retorno);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<ConsultaDTO> findBydId(@PathVariable Long id) {
		Consulta dto = service.findById(id);
		return ResponseEntity.ok().body(new ConsultaDTO(dto));
	}

	@GetMapping(value = "/usuario/{id}")
	public ResponseEntity<List<ConsultaDTO>> findBydIdUsuario(@PathVariable Long id) {
		List<Consulta> dto = service.findByIdUsuario(id);
		List<ConsultaDTO> retorno = new ArrayList<>();
		for (Consulta consulta : dto) {
			retorno.add(new ConsultaDTO(consulta));
		}
		return ResponseEntity.ok().body(retorno);
	}

	@PostMapping
	public ResponseEntity<ConsultaDTO> insert(@Valid @RequestBody ConsultaDTO dto) {
		Consulta newDto = service.insert(new Consulta(dto));
		newDto = service.findById(newDto.getId());
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newDto.getId()).toUri();

		try {
			NotificacaoDTO notificacao = new NotificacaoDTO();
			notificacao.setIdConsulta(newDto.getId().toString());
			notificacao.setDescricao(
					"Uma consulta foi marcada para o paciente: " + newDto.getPaciente().getUsuario().getPrimeiroNome());
			notificacao.setNovoStatus(newDto.getStatus().toString());
			rabbitService.enviaMensagem("NOTIFICACOES", notificacao);
			rabbitService.enviaMensagem("NOTIFICACOES", notificacao);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		return ResponseEntity.created(uri).body(new ConsultaDTO(newDto));
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<ConsultaDTO> update(@PathVariable Long id, @Valid @RequestBody ConsultaDTO dto) {
		Consulta newDto = service.update(id, new Consulta(dto));
		return ResponseEntity.ok().body(new ConsultaDTO(newDto));
	}

	@RequestMapping(value = "/status/{id}", method = RequestMethod.PUT)
	public ResponseEntity<ConsultaDTO> alteraStatus(@PathVariable Long id, @RequestBody StatusConsulta status) {
		Consulta newDto = service.alteraStatus(id, status);

		try {
			NotificacaoDTO notificacao = new NotificacaoDTO();
			notificacao.setIdConsulta(newDto.getId().toString());
			notificacao.setDescricao("Status da consulta foi alterada para: " + newDto.getStatus().toString());
			notificacao.setNovoStatus(newDto.getStatus().toString());
			rabbitService.enviaMensagem("NOTIFICACOES", notificacao);
			rabbitService.enviaMensagem("NOTIFICACOES", notificacao);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		return ResponseEntity.ok().body(new ConsultaDTO(newDto));
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}