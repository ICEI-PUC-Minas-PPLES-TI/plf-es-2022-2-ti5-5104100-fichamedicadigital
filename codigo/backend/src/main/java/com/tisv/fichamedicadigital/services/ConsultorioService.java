package com.tisv.fichamedicadigital.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.entities.Consultorio;
import com.tisv.fichamedicadigital.repositories.ConsultorioRepository;
import com.tisv.fichamedicadigital.repositories.MedicoRepository;
import com.tisv.fichamedicadigital.repositories.PacienteRepository;
import com.tisv.fichamedicadigital.repositories.RoleRepository;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;
import com.tisv.fichamedicadigital.services.exceptions.DatabaseException;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@Service
public class ConsultorioService {

	@Autowired
	private ConsultorioRepository repository;

	@Transactional(readOnly = true)
	public Page<Consultorio> findAllPaged(Pageable pageable) {
		Page<Consultorio> list = repository.findAll(pageable);
		return list;
	}

	@Transactional(readOnly = true)
	public Consultorio findById(Long id) {
		Consultorio obj = repository.findByIdMedico(id);
		return obj;
	}

	@Transactional
	public Consultorio insert(Consultorio dto) {
		dto = repository.save(dto);
		return dto;
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id não encontrado: " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}
}
