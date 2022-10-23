package com.tisv.fichamedicadigital.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.entities.FichaMedica;
import com.tisv.fichamedicadigital.entities.Usuario;
import com.tisv.fichamedicadigital.entities.Vacina;
import com.tisv.fichamedicadigital.repositories.FichaMedicaRepository;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;
import com.tisv.fichamedicadigital.services.exceptions.DatabaseException;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@Service
public class FichaMedicaService {

//	private static Logger logger = LoggerFactory.getLogger(UsuarioService.class);

	@Autowired
	private FichaMedicaRepository fichaMedicaRepository;

	@Autowired
	private UsuarioRepository repository;

	/***
	 * Método para retornar todos as fichas medicas paginadas
	 * 
	 * @param Número da página/Quantidade de fichas por página/Campo de ordenação
	 *               (page=0&size=12&sort=id)
	 * @return Lista com os fichas
	 */
	@Transactional(readOnly = true)
	public Page<FichaMedica> findAllPaged(Pageable pageable) {
		return fichaMedicaRepository.findAll(pageable);
	}

	@Transactional(readOnly = true)
	public FichaMedica findById(Long id) {
		Optional<FichaMedica> obj = fichaMedicaRepository.findById(id);
		FichaMedica entity = obj.orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado!"));
		return entity;
	}

	@Transactional(readOnly = true)
	public FichaMedica findByUsuario(Long id) {
		Optional<FichaMedica> obj = fichaMedicaRepository.findByUsuario(new Usuario(id));
		FichaMedica entity = obj.orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado!"));
		return entity;
	}

	/***
	 * Método que irá criar uma FichaMedica, além disso, também criará o paciente a
	 * partir desse usuário e dará a role paciente desse usuário
	 * 
	 * @param Usuário que será inserido
	 * @return Retorna o usuário criado
	 */
	@Transactional
	public FichaMedica insert(FichaMedica ficha) {
		Optional<Usuario> obj = repository.findById(ficha.getUsuario().getId());
		Usuario user = obj.orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado!"));
		ficha.setUsuario(user);
		ficha = fichaMedicaRepository.save(ficha);
		return ficha;
	}

	@Transactional
	public FichaMedica update(Long id, FichaMedica dto) {
		try {
			FichaMedica entity = fichaMedicaRepository.getReferenceById(id);
			updateObject(entity, dto);
			entity = fichaMedicaRepository.save(entity);
			return entity;
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id não encontrado " + id);
		}
	}

	public void delete(Long id) {
		try {
			fichaMedicaRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id não encontrado: " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}

	private void updateObject(FichaMedica fichaBD, FichaMedica fichaUpdate) {
		fichaBD.setCardiaco(fichaUpdate.getCardiaco());
		fichaBD.setDiabetico(fichaUpdate.getDiabetico());
		fichaBD.setInternado(fichaUpdate.getInternado());
		fichaBD.setTransfusao(fichaUpdate.getTransfusao());
		fichaBD.setDesmaioOuConvulsao(fichaUpdate.getDesmaioOuConvulsao());
		fichaBD.setIntoleranciaLactose(fichaUpdate.getIntoleranciaLactose());

		fichaBD.setNumeroCarteirinha(fichaUpdate.getNumeroCarteirinha());
		fichaBD.setConvenio(fichaUpdate.getConvenio());
		fichaBD.setCartaoSus(fichaUpdate.getCartaoSus());
		fichaBD.setTipoSanguineo(fichaUpdate.getTipoSanguineo());

		fichaBD.getDoencas().clear();
		fichaBD.getMedicamentos().clear();
		fichaBD.getMedicamentosAlergia().clear();
		fichaBD.getVacinas().clear();

		for (String doenca : fichaUpdate.getDoencas()) {
			fichaBD.getDoencas().add(doenca);
		}

		for (String medicamento : fichaUpdate.getMedicamentos()) {
			fichaBD.getMedicamentos().add(medicamento);
		}

		for (String alergia : fichaUpdate.getMedicamentosAlergia()) {
			fichaBD.getMedicamentosAlergia().add(alergia);
		}

		for (Vacina vacina : fichaUpdate.getVacinas()) {
			fichaBD.getVacinas().add(vacina);
		}

	}

}