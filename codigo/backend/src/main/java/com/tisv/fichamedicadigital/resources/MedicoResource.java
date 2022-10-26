package com.tisv.fichamedicadigital.resources;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tisv.fichamedicadigital.dto.MedicoDTO;
import com.tisv.fichamedicadigital.dto.UsuarioDTO;
import com.tisv.fichamedicadigital.entities.Medico;
import com.tisv.fichamedicadigital.services.MedicoService;

@RestController
@RequestMapping(value = "/medicos")
public class MedicoResource {

	@Autowired
	private MedicoService service;

	/***
	 * Método para retornar todos os médicos
	 * 
	 * @param Número da página/Quantidade de médicos por página/Campo de ordenação
	 *               (page=0&size=12&sort=id)
	 * @return Retorna uma lista com vários médicos
	 */
	@GetMapping
	public ResponseEntity<List<MedicoDTO>> findAll(Pageable pageable) {
		Page<Medico> list = service.findAllPaged(pageable);
		List<MedicoDTO> listDTO = new ArrayList<>();
		for (Medico medico : list) {
			listDTO.add(new MedicoDTO(medico));
		}
		return ResponseEntity.ok().body(listDTO);
	}

	/***
	 * Método para encontrar médico a partir do Id do médico
	 * 
	 * @param Id do médico
	 * @return Retorna o médico criado
	 */
	@GetMapping(value = "/{id}")
	public ResponseEntity<MedicoDTO> findBydId(@PathVariable Long id) {
		Medico medico = service.findByUsuario(id);
		return ResponseEntity.ok().body(new MedicoDTO(medico));
	}

	/***
	 * Método para criar um médico. A partir do Id do usuário. Ele irá criar um
	 * médico a partir desse usuário e irá retirar o status de paciente
	 * 
	 * @param Id do usuário
	 * @return Retorna no médico criado
	 */
	@PostMapping
	public ResponseEntity<MedicoDTO> insert(@RequestBody UsuarioDTO id) {
		Medico medico = service.criaMedico(id.getId());
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(medico.getId()).toUri();
		return ResponseEntity.created(uri).body(new MedicoDTO(medico));
	}

	/***
	 * Método para deletar médico a partir do Id do médico
	 * 
	 * @param Id do médico
	 * @return Retorno sem conteúdo
	 */
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}