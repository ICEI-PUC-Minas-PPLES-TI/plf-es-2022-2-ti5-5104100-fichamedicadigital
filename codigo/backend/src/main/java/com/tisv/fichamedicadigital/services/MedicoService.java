package com.tisv.fichamedicadigital.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.entities.Medico;
import com.tisv.fichamedicadigital.entities.Paciente;
import com.tisv.fichamedicadigital.entities.Usuario;
import com.tisv.fichamedicadigital.repositories.MedicoRepository;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;
import com.tisv.fichamedicadigital.services.exceptions.DatabaseException;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@Service
public class MedicoService {

	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private MedicoRepository medicoRepository;

	@Autowired
	private PacienteService pacienteService;

	@Transactional(readOnly = true)
	public Page<Medico> findAllPaged(Pageable pageable) {
		return medicoRepository.findAll(pageable);
	}

	@Transactional(readOnly = true)
	public Medico findByUsuario(Long id) {
		Optional<Medico> obj = medicoRepository.findByUsuario(new Usuario(id));
		Medico entity = obj.orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado!"));
		return entity;
	}

	@Transactional
	public Medico criaMedico(Long id) {
		Paciente obj = pacienteService.findByUsuario(id);
		pacienteService.delete(obj.getId());
		Usuario usuario = repository.findById(id).get();
		usuarioService.adicionaRole(usuario.getId(), "ROLE_MEDICO");
		usuarioService.retiraRole(usuario.getId(), "ROLE_PACIENTE");
		Medico medico = new Medico(usuario);
		return medicoRepository.save(medico);
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
