package com.tisv.fichamedicadigital.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.entities.Paciente;
import com.tisv.fichamedicadigital.entities.Usuario;
import com.tisv.fichamedicadigital.repositories.PacienteRepository;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;
import com.tisv.fichamedicadigital.services.exceptions.DatabaseException;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@Service
public class PacienteService {

	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private PacienteRepository pacienteRepository;

	/***
	 * Método para retornar todos os pacientes paginados
	 * @param Número da página/Quantidade de médicos por página/Campo de ordenação (page=0&size=12&sort=id)
	 * @return Lista com os pacientes
	 */
	@Transactional(readOnly = true)
	public Page<Paciente> findAllPaged(Pageable pageable) {
		return pacienteRepository.findAll(pageable);
	}

	@Transactional(readOnly = true)
	public Paciente findById(Long id) {
		Optional<Paciente> obj = pacienteRepository.findById(id);
		Paciente entity = obj.orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado!"));
		return entity;
	}

	@Transactional(readOnly = true)
	public Paciente findByUsuario(Long id) {
		Optional<Paciente> obj = pacienteRepository.findByUsuario(new Usuario(id));
		Paciente entity = obj.orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado!"));
		return entity;
	}

	@Transactional
	public Paciente criaPaciente(Long id) {
		Optional<Usuario> obj = repository.findById(id);
		Usuario entity = obj.orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado!"));
		Paciente paciente = new Paciente(entity);
		return pacienteRepository.save(paciente);
	}

	public void delete(Long id) {
		try {
			pacienteRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id não encontrado: " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}

}
