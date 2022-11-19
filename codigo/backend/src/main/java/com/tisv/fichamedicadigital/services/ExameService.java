package com.tisv.fichamedicadigital.services;

import java.net.URL;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.tisv.fichamedicadigital.dto.UriDTO;
import com.tisv.fichamedicadigital.entities.Exame;
import com.tisv.fichamedicadigital.entities.Usuario;
import com.tisv.fichamedicadigital.repositories.ExameRepository;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;
import com.tisv.fichamedicadigital.services.exceptions.DatabaseException;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@Service
public class ExameService {

	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private ExameRepository exameRepository;

	@Autowired
	private S3Service s3Service;

	public UriDTO uploadFile(MultipartFile file) {
		URL url = s3Service.uploadFile(file);
		return new UriDTO(url.toString());
	}

	@Transactional(readOnly = true)
	public Page<Exame> findAllPaged(Pageable pageable) {
		return exameRepository.findAll(pageable);
	}

	@Transactional(readOnly = true)
	public Exame findById(Long id) {
		Optional<Exame> obj = exameRepository.findById(id);
		Exame entity = obj.orElseThrow(() -> new ResourceNotFoundException("Exame não encontrado!"));
		return entity;
	}

	@Transactional(readOnly = true)
	public List<Exame> findByUsuario(Long id) {
		List<Exame> obj = exameRepository.findByUsuario(new Usuario(id));
		return obj;
	}

	@Transactional
	public Exame insert(Exame exame) {
		exame = exameRepository.save(exame);
		return exame;
	}

	public void delete(Long id) {
		try {
			exameRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id não encontrado: " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}

}
