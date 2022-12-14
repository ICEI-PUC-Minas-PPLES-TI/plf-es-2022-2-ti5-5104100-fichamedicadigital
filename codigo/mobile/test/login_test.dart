import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

class LoginTest {
  static testeLogin(WidgetTester tester) async {
    await tester.enterText(find.widgetWithText(TextFormField, 'E-mail'), 'paciente@gmail.com');
    await tester.enterText(find.widgetWithText(TextFormField, 'Senha'), 'senha123');
    await tester.tap(find.widgetWithText(ElevatedButton, 'ENTRAR'));
  }
}