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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tisv.fichamedicadigital.entities.Consultorio;
import com.tisv.fichamedicadigital.services.ConsultorioService;

@RestController
@RequestMapping(value = "/consultorios")
public class ConsultorioResource {

	@Autowired
	private ConsultorioService service;

	@GetMapping
	public ResponseEntity<Page<Consultorio>> findAll(Pageable pageable) {
		Page<Consultorio> list = service.findAllPaged(pageable);
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Consultorio> findBydId(@PathVariable Long id) {
		Consultorio dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}

	@PostMapping
	public ResponseEntity<Consultorio> insert(@Valid @RequestBody Consultorio dto) {
		Consultorio retorno = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(retorno).toUri();
		return ResponseEntity.created(uri).body(retorno);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}