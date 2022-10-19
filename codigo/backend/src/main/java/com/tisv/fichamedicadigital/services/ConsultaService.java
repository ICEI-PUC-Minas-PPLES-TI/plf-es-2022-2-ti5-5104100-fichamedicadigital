package com.tisv.fichamedicadigital.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.dto.UsuarioDTO;
import com.tisv.fichamedicadigital.entities.Consulta;
import com.tisv.fichamedicadigital.entities.Usuario;
import com.tisv.fichamedicadigital.repositories.ConsultaRepository;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;
import com.tisv.fichamedicadigital.services.exceptions.DatabaseException;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@Service
public class ConsultaService {

	@Autowired
	private ConsultaRepository repository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Transactional(readOnly = true)
	public Page<Consulta> findAllPaged(Pageable pageable) {
		Page<Consulta> list = repository.findAll(pageable);
		for (Consulta item : list) {
			Optional<Usuario> medico = usuarioRepository.findById(item.getIdMedico());
			item.setMedico(new UsuarioDTO(medico.get()));
			Optional<Usuario> paciente = usuarioRepository.findById(item.getIdPaciente());
			item.setPaciente(new UsuarioDTO(paciente.get()));
		}
		return list;
	}

	@Transactional(readOnly = true)
	public Consulta findById(Long id) {
		Optional<Consulta> obj = repository.findById(id);
		Consulta entity = obj.orElseThrow(() -> new ResourceNotFoundException("Consulta não encontrada!"));
		Optional<Usuario> medico = usuarioRepository.findById(entity.getIdMedico());
		entity.setMedico(new UsuarioDTO(medico.get()));
		Optional<Usuario> paciente = usuarioRepository.findById(entity.getIdPaciente());
		entity.setPaciente(new UsuarioDTO(paciente.get()));
		return entity;
	}

	@Transactional
	public Consulta insert(Consulta dto) {
		dto = repository.save(dto);
		return dto;
	}

	@Transactional
	public Consulta update(Long id, Consulta dto) {
		try {
			Consulta entity = repository.getReferenceById(id);
			entity = repository.save(entity);
			return entity;
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id não encontrado " + id);
		}
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
