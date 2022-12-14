import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

class RegisterTest {
  static testeRegister(WidgetTester tester) async {
    await tester.enterText(find.widgetWithText(TextFormField, 'Nome'), 'Teste');
    await tester.enterText(find.widgetWithText(TextFormField, 'Sobrenome'), 'da Silva');
    await tester.enterText(find.widgetWithText(TextFormField, 'E-mail'), 'teste@gmail.com');
    await tester.enterText(find.widgetWithText(TextFormField, 'Confirmar e-mail'), 'teste@gmail.com');
    await tester.enterText(find.widgetWithText(TextFormField, 'Senha'), 'senha123');
    await tester.enterText(find.widgetWithText(TextFormField, 'Confirmar senha'), 'senha123');

    await tester.tap(find.widgetWithText(ElevatedButton, 'CADASTRAR'));
  }
}