import 'dart:convert';
import 'dart:io';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

import '../mainPage.dart';
import '../view/Register.dart';

class UserService {
  Dio dio = Dio();
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();
  // final String endpointUsers = '${Environment().BASE_URL}/users';
  login(String email, String password, context) async {
    dio.options.headers['Content-Type'] = 'application/json';
    try {
      Response response = await dio.post(
          "https://fichamedicadigital.herokuapp.com/usuarios/login",
          data: {"email": email, "password": password});
      var nome =
          response.data["primeiroNome"] + " " + response.data["sobreNome"];
      Navigator.push(
          context,
          MaterialPageRoute(
              builder: (context) =>
                  MainPage(nome: nome, id: response.data["id"])));
    } catch (e) {
      Widget cadastraButton = ElevatedButton(
        child: const Text("Cadastrar"),
        onPressed: () {
          Navigator.push(context,
              MaterialPageRoute(builder: (context) => const RegisterPage()));
        },
      );
      AlertDialog alerta = AlertDialog(
        title: const Text("Login Inválido"),
        content: const Text(
            "Favor conferir as credenciais de login. \nCaso não tenha um login, é só clicar em Cadastrar"),
        actions: [
          cadastraButton,
        ],
      );
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return alerta;
        },
      );
    }
  }

  register(
      context,
      date,
      TextEditingController emailController,
      TextEditingController nameController,
      TextEditingController passwordController,
      TextEditingController sobrenomeController) async {
    dio.options.headers['Content-Type'] = 'application/json';
    if (emailController.text.isEmpty ||
        nameController.text.isEmpty ||
        passwordController.text.isEmpty ||
        sobrenomeController.text.isEmpty) {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return const AlertDialog(
            title: Text("Erro ao cadastrar"),
              content: Text(
                  "Favor preencher todos os campos antes de clicar em cadastrar"));
        },
      );
    }
    try {
      Response response = await dio
          .post("https://fichamedicadigital.herokuapp.com/usuarios", data: {
        "dataNascimento": date.toIso8601String(),
        "email": emailController.text,
        "password": passwordController.text,
        "primeiroNome": nameController.text,
        "sobreNome": sobrenomeController.text
      });
      var nome =
          response.data["primeiroNome"] + " " + response.data["sobreNome"];
      Navigator.push(
          context,
          MaterialPageRoute(
              builder: (context) =>
                  MainPage(nome: nome, id: response.data["id"])));
    } catch (e) {
      throw e.toString();
    }
  }

  userData(int id) async {
    Response response =
        await dio.get("https://fichamedicadigital.herokuapp.com/fichas/$id");
    return response.data;
  }
}
