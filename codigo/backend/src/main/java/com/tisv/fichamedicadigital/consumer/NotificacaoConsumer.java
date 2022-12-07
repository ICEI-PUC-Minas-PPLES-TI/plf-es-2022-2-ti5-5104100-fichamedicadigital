package com.tisv.fichamedicadigital.consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tisv.fichamedicadigital.dto.NotificacaoDTO;
import com.tisv.fichamedicadigital.entities.Notificacao;
import com.tisv.fichamedicadigital.repositories.NotificacaoRepository;

@Component
public class NotificacaoConsumer {

	@Autowired
	NotificacaoRepository repository;

	@RabbitListener(queues = "NOTIFICACOES")
	private void consumidor(NotificacaoDTO dto) {
		Notificacao not = new Notificacao();
		not.setDescricao(dto.getDescricao());
		not.setIdConsulta(dto.getIdConsulta());
		not.setNovoStatus(dto.getNovoStatus());
		not.setIdUsuario(dto.getIdUsuario());
		repository.save(not);
		System.out.println("Notificacao criada!");
	}
}
