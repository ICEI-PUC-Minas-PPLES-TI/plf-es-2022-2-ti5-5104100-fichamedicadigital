package com.tisv.fichamedicadigital.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tisv.fichamedicadigital.dto.UriDTO;
import com.tisv.fichamedicadigital.services.ExameService;

@RestController
@RequestMapping(value = "/exames")
public class ExameResource {

	
	@Autowired
	private ExameService service;
	
	@PostMapping
	public ResponseEntity<UriDTO> uploadImage(@RequestParam("file") MultipartFile file) {
		UriDTO dto = service.uploadFile(file);
		return ResponseEntity.ok().body(dto);
	}

}
