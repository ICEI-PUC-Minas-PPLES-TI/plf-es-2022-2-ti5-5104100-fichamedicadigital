package com.tisv.fichamedicadigital.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tisv.fichamedicadigital.dto.RoleDTO;
import com.tisv.fichamedicadigital.dto.UsuarioDTO;
import com.tisv.fichamedicadigital.dto.UsuarioInsertDTO;
import com.tisv.fichamedicadigital.dto.UsuarioUpdateDTO;
import com.tisv.fichamedicadigital.entities.Role;
import com.tisv.fichamedicadigital.entities.Usuario;
import com.tisv.fichamedicadigital.repositories.RoleRepository;
import com.tisv.fichamedicadigital.repositories.UsuarioRepository;
import com.tisv.fichamedicadigital.services.exceptions.DatabaseException;
import com.tisv.fichamedicadigital.services.exceptions.ResourceNotFoundException;

@Service
public class UsuarioService implements UserDetailsService {

	private static Logger logger = LoggerFactory.getLogger(UsuarioService.class);
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private AuthService authService;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PacienteService pacienteService;

	/***
	 * Retorna lista paginada de todos os usuários
	 * 
	 * @param Paginação
	 * @return Lista paginada de usuários
	 */
	@Transactional(readOnly = true)
	public Page<UsuarioDTO> findAllPaged(Pageable pageable) {
		Page<Usuario> list = repository.findAll(pageable);
		return list.map(x -> new UsuarioDTO(x));
	}

	/***
	 * Método para retornar uma usuário a partir do seu Id
	 * 
	 * @param Id do usuário
	 * @return Usuário
	 */
	@Transactional(readOnly = true)
	public UsuarioDTO findById(Long id) {
		authService.validateSelfOrAdmin(id);
		Optional<Usuario> obj = repository.findById(id);
		Usuario entity = obj.orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado!"));
		return new UsuarioDTO(entity);
	}

	/***
	 * Método que irá criar um Usuário, além disso, também criará o paciente a
	 * partir desse usuário e dará a role paciente desse usuário
	 * 
	 * @param Usuário que será inserido
	 * @return Retorna o usuário criado
	 */
	@Transactional
	public UsuarioDTO insert(UsuarioInsertDTO dto) {
		Usuario entity = new Usuario();
		copyDtoToEntityInsert(dto, entity);
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity.getRoles().add(roleRepository.findByAuthority("ROLE_PACIENTE").get());
		entity = repository.save(entity);
		pacienteService.criaPaciente(entity.getId());
		return new UsuarioDTO(entity);
	}

	@Transactional
	public UsuarioDTO login(String email, String senha) {
		logger.info("Email: " + email);
		logger.info("Senha: " + senha);
		Usuario entity = new Usuario();

		entity = repository.findByEmail(email);
		if (entity == null) {
			throw new ResourceNotFoundException("Email inexistente!");
		}
		if (passwordEncoder.matches(senha, entity.getPassword())) {
			return new UsuarioDTO(entity);
		} else {
			throw new ResourceNotFoundException("Senha incorreta!");
		}

	}

	/***
	 * Método para adicionar uma Role a um usuario
	 * 
	 * @param Id   do usuário
	 * @param Nome da role
	 * @throws Pode lançar ResourceNotFoundException caso a role não exista
	 */
	@Transactional
	public void adicionaRole(Long id, String nomeRole) {
		Usuario user = repository.getReferenceById(id);
		try {
			user.getRoles().add(roleRepository.findByAuthority(nomeRole).get());
			repository.save(user);
		} catch (Exception e) {
			throw new ResourceNotFoundException("Role inexistente: " + nomeRole);
		}
	}

	/***
	 * Método para remover uma Role de um usuario
	 * 
	 * @param Id   do usuário
	 * @param Nome da role
	 */
	@Transactional
	public void retiraRole(Long id, String nomeRole) {
		Usuario user = repository.getReferenceById(id);
		try {
			Role roleDelete = roleRepository.findByAuthority(nomeRole).get();
			user.getRoles().remove(roleDelete);
			repository.save(user);
		} catch (Exception e) {
		}

	}

	@Transactional
	public UsuarioDTO update(Long id, UsuarioUpdateDTO dto) {
		try {
			Usuario entity = repository.getReferenceById(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new UsuarioDTO(entity);
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

	private void copyDtoToEntity(UsuarioDTO dto, Usuario entity) {
		entity.setPrimeiroNome(dto.getPrimeiroNome());
		entity.setSobreNome(dto.getSobreNome());
		entity.setEmail(dto.getEmail());
		entity.setDataNascimento(dto.getDataNascimento());

		entity.getRoles().clear();
		for (RoleDTO roleDto : dto.getRoles()) {
			Role role = roleRepository.getReferenceById(roleDto.getId());
			entity.getRoles().add(role);
		}
	}

	private void copyDtoToEntityInsert(UsuarioDTO dto, Usuario entity) {
		entity.setPrimeiroNome(dto.getPrimeiroNome());
		entity.setSobreNome(dto.getSobreNome());
		entity.setEmail(dto.getEmail());
		entity.setDataNascimento(dto.getDataNascimento());

		entity.getRoles().clear();
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Usuario user = repository.findByEmail(username);
		if (user == null) {
			logger.error("Usuário não encontrado: " + username);
			throw new UsernameNotFoundException("Email não encontrado.");
		}
		logger.info("Usuário encontrado: " + username);
		return user;
	}

}
