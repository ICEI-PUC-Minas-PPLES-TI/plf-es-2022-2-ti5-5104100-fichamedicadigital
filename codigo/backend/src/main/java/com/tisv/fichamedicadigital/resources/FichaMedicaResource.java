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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tisv.fichamedicadigital.dto.FichaMedicaDTO;
import com.tisv.fichamedicadigital.entities.FichaMedica;
import com.tisv.fichamedicadigital.services.FichaMedicaService;

@RestController
@RequestMapping(value = "/fichas")
public class FichaMedicaResource {

	@Autowired
	private FichaMedicaService service;

	@GetMapping
	public ResponseEntity<List<FichaMedicaDTO>> findAll(Pageable pageable) {
		Page<FichaMedica> list = service.findAllPaged(pageable);
		List<FichaMedicaDTO> retorno = new ArrayList<>();
		for (FichaMedica ficha : list) {
			retorno.add(new FichaMedicaDTO(ficha));
		}
		return ResponseEntity.ok().body(retorno);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<FichaMedicaDTO> findBydId(@PathVariable Long id) {
		FichaMedica ficha = service.findByUsuario(id);
		return ResponseEntity.ok().body(new FichaMedicaDTO(ficha));
	}

	/***
	 * Método para criar uma ficha medica. A partir do Id do usuário.
	 * 
	 * @return Retorna a ficha medica
	 */
	@PostMapping
	public ResponseEntity<FichaMedicaDTO> insert(@RequestBody FichaMedicaDTO fichaMedica) {
		FichaMedica ficha = service.insert(new FichaMedica(fichaMedica));
		//ficha = service.findById(ficha.getId());
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(ficha.getId()).toUri();
		return ResponseEntity.created(uri).body(new FichaMedicaDTO(ficha));
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<FichaMedicaDTO> update(@Valid @PathVariable Long id, @Valid @RequestBody FichaMedicaDTO dto) {
		FichaMedica newDto = service.update(id, new FichaMedica(dto));
		newDto = service.findById(newDto.getId());
		return ResponseEntity.ok().body(new FichaMedicaDTO(newDto));
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}