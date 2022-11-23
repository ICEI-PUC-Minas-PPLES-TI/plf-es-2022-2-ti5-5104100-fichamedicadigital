package com.tisv.fichamedicadigital.services;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class RabbitMQService {

	@Autowired
	private RabbitTemplate rabbitTemplate;

	@Autowired
	private ObjectMapper objectMapper;

	public void enviaMensagem(String nomeFila, Object mensagem) {
		try {
//			String mensagemJson = this.objectMapper.writeValueAsString(mensagem);
			this.rabbitTemplate.convertAndSend(nomeFila, mensagem);
		} catch (Exception e) {

		}
	}
}
