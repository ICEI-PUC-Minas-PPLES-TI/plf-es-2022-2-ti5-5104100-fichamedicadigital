package com.tisv.fichamedicadigital.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tisv.fichamedicadigital.dto.NotificacaoDTO;
import com.tisv.fichamedicadigital.entities.Notificacao;
import com.tisv.fichamedicadigital.services.NotificacaoService;
import com.tisv.fichamedicadigital.services.RabbitMQService;

@RestController
@RequestMapping(value = "/notificacoes")
public class NotificacaoResource {

	@Autowired
	private RabbitMQService service;

	@Autowired
	private NotificacaoService notificacaoService;

	@PutMapping
	private ResponseEntity alteraNotificacao(@RequestBody NotificacaoDTO notificacao) {

		service.enviaMensagem("NOTIFICACOES", notificacao);
		service.enviaMensagem("NOTIFICACOES", notificacao);
		return new ResponseEntity(HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Notificacao> findBydId(@PathVariable Long id) {
		List<Notificacao> retorno = notificacaoService.findByIdUsuario(id);
//		for (Notificacao item : retorno) {
//			notificacaoService.delete(item.getId());
//		}
		Notificacao not = new Notificacao();
		if (retorno.size() > 0) {
			not = retorno.get(retorno.size() - 1);
		}

		return ResponseEntity.ok().body(not);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Notificacao> delete(@PathVariable Long id) {
		List<Notificacao> retorno = notificacaoService.findByIdUsuario(id);
		for (Notificacao item : retorno) {
			notificacaoService.delete(item.getId());
		}
		return ResponseEntity.ok().body(null);
	}

}