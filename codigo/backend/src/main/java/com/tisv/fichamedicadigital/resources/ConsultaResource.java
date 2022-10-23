package com.tisv.fichamedicadigital.resources;

import java.net.URI;

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

import com.tisv.fichamedicadigital.entities.Consulta;
import com.tisv.fichamedicadigital.entities.enums.StatusConsulta;
import com.tisv.fichamedicadigital.services.ConsultaService;

@RestController
@RequestMapping(value = "/consultas")
public class ConsultaResource {

	@Autowired
	private ConsultaService service;

	@GetMapping
	public ResponseEntity<Page<Consulta>> findAll(Pageable pageable) {
		Page<Consulta> list = service.findAllPaged(pageable);
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Consulta> findBydId(@PathVariable Long id) {
		Consulta dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}

	@PostMapping
	public ResponseEntity<Consulta> insert(@Valid @RequestBody Consulta dto) {
		Consulta newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newDto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Consulta> update(@PathVariable Long id, @Valid @RequestBody Consulta dto) {
		Consulta newDto = service.update(id, dto);
		return ResponseEntity.ok().body(newDto);
	}

	@RequestMapping(value = "/status/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Consulta> alteraStatus(@PathVariable Long id, @RequestBody StatusConsulta status) {
		Consulta newDto = service.alteraStatus(id, status);
		return ResponseEntity.ok().body(newDto);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}