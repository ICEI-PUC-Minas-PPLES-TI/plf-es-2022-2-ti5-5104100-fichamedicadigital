package com.tisv.fichamedicadigital.resources;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tisv.fichamedicadigital.dto.ExameDTO;
import com.tisv.fichamedicadigital.dto.FichaMedicaDTO;
import com.tisv.fichamedicadigital.dto.UriDTO;
import com.tisv.fichamedicadigital.entities.Exame;
import com.tisv.fichamedicadigital.entities.FichaMedica;
import com.tisv.fichamedicadigital.services.ExameService;

@RestController
@RequestMapping(value = "/exames")
public class ExameResource {

	@Autowired
	private ExameService service;

	@RequestMapping(value = "/imagem", method = RequestMethod.POST)
	public ResponseEntity<UriDTO> uploadImage(@RequestParam("file") MultipartFile file) {
		UriDTO dto = service.uploadFile(file);
		return ResponseEntity.ok().body(dto);
	}

	@PostMapping
	public ResponseEntity<ExameDTO> insert(@RequestBody ExameDTO dto) {
		Exame exame = new Exame(dto);
		Exame newDto = service.insert(exame);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newDto.getId()).toUri();
		return ResponseEntity.created(uri).body(new ExameDTO(newDto));
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<ExameDTO> findBydId(@PathVariable Long id) {
		Exame dto = service.findById(id);
		return ResponseEntity.ok().body(new ExameDTO(dto));
	}

	@GetMapping
	public ResponseEntity<List<ExameDTO>> findAll(Pageable pageable) {
		Page<Exame> list = service.findAllPaged(pageable);
		List<ExameDTO> retorno = new ArrayList<>();
		for (Exame ficha : list) {
			retorno.add(new ExameDTO(ficha));
		}
		return ResponseEntity.ok().body(retorno);
	}

	@GetMapping(value = "/usuario/{id}")
	public ResponseEntity<List<ExameDTO>> findBydIdUsuario(@PathVariable Long id) {
		List<Exame> dto = service.findByUsuario(id);
		List<ExameDTO> retorno = new ArrayList<>();
		for (Exame exame : dto) {
			retorno.add(new ExameDTO(exame));
		}
		return ResponseEntity.ok().body(retorno);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
