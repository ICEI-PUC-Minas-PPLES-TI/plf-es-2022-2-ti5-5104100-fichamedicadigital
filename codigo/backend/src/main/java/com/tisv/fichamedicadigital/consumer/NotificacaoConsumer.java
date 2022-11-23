package com.tisv.fichamedicadigital.consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import com.tisv.fichamedicadigital.dto.NotificacaoDTO;

@Component
public class NotificacaoConsumer {

	@RabbitListener(queues = "NOTIFICACOES")
	private void consumidor(NotificacaoDTO dto) {
		System.out.println("-------------------------");
		System.out.println(dto.getIdConsulta());
		System.out.println(dto.getDescricao());
		System.out.println(dto.getNovoStatus());
		System.out.println("-------------------------");
	}
}
