package com.tisv.fichamedicadigital.services;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.entities.Consulta;
import com.tisv.fichamedicadigital.entities.Medico;
import com.tisv.fichamedicadigital.entities.Paciente;
import com.tisv.fichamedicadigital.entities.Role;
import com.tisv.fichamedicadigital.entities.Usuario;
import com.tisv.fichamedicadigital.entities.enums.StatusConsulta;
import com.tisv.fichamedicadigital.repositories.ConsultaRepository;
import com.tisv.fichamedicadigital.repositories.MedicoRepository;
import com.tisv.fichamedicadigital.repositories.PacienteRepository;
import com.tisv.fichamedicadigital.repositories.RoleRepository;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;
import com.tisv.fichamedicadigital.services.exceptions.DatabaseException;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@Service
public class ConsultaService {

	@Autowired
	private ConsultaRepository repository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private MedicoRepository medicoRepository;

	@Autowired
	private PacienteRepository pacienteRepository;

	@Transactional(readOnly = true)
	public Page<Consulta> findAllPaged(Pageable pageable) {
		Page<Consulta> list = repository.findAll(pageable);
		return list;
	}

	@Transactional(readOnly = true)
	public Consulta findById(Long id) {
		Optional<Consulta> obj = repository.findById(id);
		Consulta entity = obj.orElseThrow(() -> new ResourceNotFoundException("Consulta não encontrada!"));
		return entity;
	}

	@Transactional(readOnly = true)
	public List<Consulta> findByIdUsuario(Long id) {
		Role roleMedico = roleRepository.findById(2L).get();
		Usuario user = usuarioRepository.findById(id).get();
		List<Consulta> consultas;
		if (user.getRoles().contains(roleMedico)) {
			Medico medico = medicoRepository.findByUsuario(user).get();
			consultas = repository.findByMedico(medico);
		} else {
			Paciente paciente = pacienteRepository.findByUsuario(user).get();
			consultas = repository.findByPaciente(paciente);
		}
		return consultas;
	}

	@Transactional
	public Consulta insert(Consulta dto) {
		List<Consulta> listaConsultas = repository.findByData(dto.getData());
		Calendar horaInicioConsulta = Calendar.getInstance();
		horaInicioConsulta.setTime(dto.getHoraInicio());
		Calendar horaFimConsulta = Calendar.getInstance();
		horaFimConsulta.setTime(dto.getHoraFim());
		Calendar horaInicioConsultaMarcada = Calendar.getInstance();
		Calendar horaFimConsultaMarcada = Calendar.getInstance();
		for (Consulta consulta : listaConsultas) {
			horaInicioConsultaMarcada.setTime(consulta.getHoraInicio());
			horaFimConsultaMarcada.setTime(consulta.getHoraFim());
			if (comparaHoras(horaInicioConsulta, horaFimConsulta, horaInicioConsultaMarcada, horaFimConsultaMarcada)) {
				throw new ResourceNotFoundException("Horário de consulta indisponível!");
			}
		}
		dto.setStatus(StatusConsulta.PENDENTE);
		dto = repository.save(dto);

		return dto;
	}

	@Transactional
	public Consulta update(Long id, Consulta dto) {
		try {
			Consulta entity = repository.getReferenceById(id);
			entity.setData(dto.getData());
			entity.setHoraInicio(dto.getHoraInicio());
			entity.setHoraFim(dto.getHoraFim());
			entity.setStatus(dto.getStatus());
			entity = repository.save(entity);
			return entity;
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id não encontrado " + id);
		}
	}

	@Transactional
	public Consulta alteraStatus(Long id, StatusConsulta status) {
		try {
			Consulta entity = repository.getReferenceById(id);
			entity.setStatus(status);
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

	private boolean comparaHoras(Calendar horaInicioConsulta, Calendar horaFimConsulta,
			Calendar horaInicioConsultaMarcada, Calendar horaFimConsultaMarcada) {
		if ((horaInicioConsulta.get(Calendar.HOUR) < horaInicioConsultaMarcada.get(Calendar.HOUR)
				&& horaInicioConsulta.get(Calendar.MINUTE) < horaInicioConsultaMarcada.get(Calendar.MINUTE)
				&& horaFimConsulta.get(Calendar.HOUR) < horaInicioConsultaMarcada.get(Calendar.HOUR)
				&& horaFimConsulta.get(Calendar.MINUTE) < horaInicioConsultaMarcada.get(Calendar.MINUTE))
				&& (horaInicioConsulta.get(Calendar.HOUR) > horaFimConsultaMarcada.get(Calendar.HOUR)
						&& horaInicioConsulta.get(Calendar.MINUTE) > horaFimConsultaMarcada.get(Calendar.MINUTE)
						&& horaFimConsulta.get(Calendar.HOUR) < horaFimConsultaMarcada.get(Calendar.HOUR)
						&& horaFimConsulta.get(Calendar.MINUTE) < horaFimConsultaMarcada.get(Calendar.MINUTE))) {
			return false;
		}
		return true;
	}
}
