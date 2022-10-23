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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tisv.fichamedicadigital.entities.FichaMedica;
import com.tisv.fichamedicadigital.services.FichaMedicaService;

@RestController
@RequestMapping(value = "/fichas")
public class FichaMedicaResource {

	@Autowired
	private FichaMedicaService service;

	@GetMapping
	public ResponseEntity<Page<FichaMedica>> findAll(Pageable pageable) {
		Page<FichaMedica> list = service.findAllPaged(pageable);
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<FichaMedica> findBydId(@PathVariable Long id) {
		FichaMedica paciente = service.findByUsuario(id);
		return ResponseEntity.ok().body(paciente);
	}

	/***
	 * Método para criar uma ficha medica. A partir do Id do usuário.
	 * 
	 * @return Retorna a ficha medica
	 */
	@PostMapping
	public ResponseEntity<FichaMedica> insert(@RequestBody FichaMedica fichaMedica) {
		FichaMedica ficha = service.insert(fichaMedica);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(ficha.getId()).toUri();
		return ResponseEntity.created(uri).body(ficha);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<FichaMedica> update(@Valid @PathVariable Long id, @Valid @RequestBody FichaMedica dto) {
		FichaMedica newDto = service.update(id, dto);
		return ResponseEntity.ok().body(newDto);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}