package com.tisv.fichamedicadigital.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tisv.fichamedicadigital.dto.NotificacaoDTO;
import com.tisv.fichamedicadigital.services.RabbitMQService;

@RestController
@RequestMapping(value = "/notificacoes")
public class NotificacaoResource {

	@Autowired
	private RabbitMQService service;

	@PutMapping
	private ResponseEntity alteraNotificacao(@RequestBody NotificacaoDTO notificacao) {

		service.enviaMensagem("NOTIFICACOES", notificacao);
		return new ResponseEntity(HttpStatus.OK);
	}

}