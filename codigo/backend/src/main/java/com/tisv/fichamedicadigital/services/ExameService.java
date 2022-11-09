package com.tisv.fichamedicadigital.services;

import java.net.URL;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.tisv.fichamedicadigital.dto.UriDTO;
import com.tisv.fichamedicadigital.repositories.MedicoRepository;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;

@Service
public class ExameService {

	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private MedicoRepository medicoRepository;

	@Autowired
	private PacienteService pacienteService;

	@Autowired
	private S3Service s3Service;

	public UriDTO uploadFile(MultipartFile file) {
		URL url = s3Service.uploadFile(file);
		return new UriDTO(url.toString());
	}

//	@Transactional(readOnly = true)
//	public Page<Medico> findAllPaged(Pageable pageable) {
//		return medicoRepository.findAll(pageable);
//	}
//
//	@Transactional(readOnly = true)
//	public Medico findByUsuario(Long id) {
//		Optional<Medico> obj = medicoRepository.findByUsuario(new Usuario(id));
//		Medico entity = obj.orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado!"));
//		return entity;
//	}
//
//	@Transactional
//	public Medico criaMedico(Long id) {
//		Paciente obj = pacienteService.findByUsuario(id);
//		pacienteService.delete(obj.getId());
//		Usuario usuario = repository.findById(id).get();
//		usuarioService.adicionaRole(usuario.getId(), "ROLE_MEDICO");
//		usuarioService.retiraRole(usuario.getId(), "ROLE_PACIENTE");
//		Medico medico = new Medico(usuario);
//		return medicoRepository.save(medico);
//	}
//
//	public void delete(Long id) {
//		try {
//			repository.deleteById(id);
//		} catch (EmptyResultDataAccessException e) {
//			throw new ResourceNotFoundException("Id não encontrado: " + id);
//		} catch (DataIntegrityViolationException e) {
//			throw new DatabaseException("Integrity violation");
//		}
//	}

}
