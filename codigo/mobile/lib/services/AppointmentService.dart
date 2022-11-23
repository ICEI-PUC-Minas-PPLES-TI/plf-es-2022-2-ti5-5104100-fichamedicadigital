import 'package:flutter/material.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import 'dart:async';
import "package:dart_amqp/dart_amqp.dart";

class MensageriaLocal {
  callNotify() async {
    ConnectionSettings settings = ConnectionSettings(
        host: "20.206.234.220",
        port: 5672,
        authProvider: const PlainAuthenticator("admin", "123456"));
    Client client = Client(settings: settings);

    Channel channel = await client
        .channel(); // auto-connect to localhost:5672 using guest credentials
    Queue queue = await channel.queue("NOTIFICACOES");
    Consumer consumer = await queue.consume();
    consumer.listen((AmqpMessage message) {
      print(message);
    });
  }
}
