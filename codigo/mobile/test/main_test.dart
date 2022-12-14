import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mobile/main.dart';

import 'login_test.dart';
import 'register_test.dart';

void main() {

  testeHomePage(WidgetTester tester) async {
    expect(find.widgetWithImage(Container, AssetImage('images/profileIcon.jpeg')), findsOneWidget);
  }

  testWidgets('Teste do fluxo de usuário', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());

    await LoginTest.testeLogin(tester);
    await tester.pump(const Duration(seconds: 5));

    await RegisterTest.testeRegister(tester);
    await tester.pump(const Duration(seconds: 5));

    await testeHomePage(tester);
  });

}