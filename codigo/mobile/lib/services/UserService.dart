import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/env.dart';
import 'package:mobile/view/main.dart';

class UserService {
 final String endpointUsers = '${Environment().BASE_URL}/users';

 void login(String email, String password, context) {
  Navigator.push(context, MaterialPageRoute(
      builder: (context) => const HomePage(title: "FMD - usuário logado")));
 }

 void register(context) {
  Navigator.push(context, MaterialPageRoute(
      builder: (context) => const HomePage(title: "FMD - usuário logado")));
 }
}