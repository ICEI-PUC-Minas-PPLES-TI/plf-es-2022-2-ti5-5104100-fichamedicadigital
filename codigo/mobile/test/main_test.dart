import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mobile/main.dart';

void main() {
  testeLogin(WidgetTester tester) async {
    await tester.enterText(find.widgetWithText(TextFormField, 'E-mail'), 'paciente@gmail.com');
    await tester.enterText(find.widgetWithText(TextFormField, 'Senha'), 'senha123');
    await tester.tap(find.widgetWithText(ElevatedButton, 'ENTRAR'));
  }

  testeHomePage(WidgetTester tester) async {
    expect(find.widgetWithImage(Container, AssetImage('images/profileIcon.jpeg')), findsOneWidget);
  }

  testWidgets('Teste da tela inicial', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    await testeLogin(tester);
    await tester.pump(const Duration(seconds: 5));
    await testeHomePage(tester);
  });

}