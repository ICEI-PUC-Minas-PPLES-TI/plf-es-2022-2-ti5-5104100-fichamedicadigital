package com.tisv.fichamedicadigital.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.entities.Notificacao;
import com.tisv.fichamedicadigital.repositories.NotificacaoRepository;
import com.tisv.fichamedicadigital.services.exceptions.DatabaseException;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@Service
public class NotificacaoService {

	@Autowired
	private NotificacaoRepository repository;

	@Transactional(readOnly = true)
	public List<Notificacao> findByIdUsuario(Long id) {
		return repository.findByIdUsuario(id);
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
