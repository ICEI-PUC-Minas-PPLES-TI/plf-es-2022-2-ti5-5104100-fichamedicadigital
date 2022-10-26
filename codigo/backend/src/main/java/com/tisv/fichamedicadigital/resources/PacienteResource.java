package com.tisv.fichamedicadigital.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tisv.fichamedicadigital.dto.PacienteDTO;
import com.tisv.fichamedicadigital.entities.Paciente;
import com.tisv.fichamedicadigital.services.PacienteService;

@RestController
@RequestMapping(value = "/pacientes")
public class PacienteResource {

	@Autowired
	private PacienteService service;

	@GetMapping
	public ResponseEntity<List<PacienteDTO>> findAll(Pageable pageable) {
		Page<Paciente> list = service.findAllPaged(pageable);
		List<PacienteDTO> listaDto = new ArrayList<>();
		for (Paciente paciente : list) {
			listaDto.add(new PacienteDTO(paciente));
		}
		return ResponseEntity.ok().body(listaDto);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<PacienteDTO> findBydId(@PathVariable Long id) {
		Paciente paciente = service.findByUsuario(id);
		return ResponseEntity.ok().body(new PacienteDTO(paciente));
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}