package com.trabalhointerdisciplinar.fmd.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trabalhointerdisciplinar.fmd.dto.AdministradorDTO;
import com.trabalhointerdisciplinar.fmd.entities.Administrador;
import com.trabalhointerdisciplinar.fmd.repositories.AdministradorRepository;
import com.trabalhointerdisciplinar.fmd.services.exceptions.DatabaseException;
import com.trabalhointerdisciplinar.fmd.services.exceptions.ResourceNotFoundException;

@Service
public class AdministradorService {

	@Autowired
	private AdministradorRepository repository;

	@Transactional(readOnly = true)
	public Page<AdministradorDTO> findAllPaged(Pageable pageable) {
		Page<Administrador> list = repository.findAll(pageable);
		return list.map(x -> new AdministradorDTO(x));
	}

	@Transactional(readOnly = true)
	public AdministradorDTO findById(Long id) {
		Optional<Administrador> obj = repository.findById(id);
		Administrador entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new AdministradorDTO(entity);
	}

	@Transactional
	public AdministradorDTO insert(AdministradorDTO dto) {
		Administrador entity = new Administrador();
		entity.setName(dto.getName());
		entity.setEmail(dto.getEmail());
		entity.setSenha(dto.getSenha());
		entity = repository.save(entity);
		return new AdministradorDTO(entity);
	}

	@Transactional
	public AdministradorDTO update(Long id, AdministradorDTO dto) {
		try {
			Administrador entity = repository.getReferenceById(id);
			entity.setName(dto.getName());
			entity.setEmail(dto.getEmail());
			entity.setSenha(dto.getSenha());
			entity = repository.save(entity);
			return new AdministradorDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}

}
