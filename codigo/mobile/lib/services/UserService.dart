import 'dart:convert';
import 'dart:io';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

import '../mainPage.dart';

class UserService {
  Dio dio = Dio();
  // final String endpointUsers = '${Environment().BASE_URL}/users';
  login(String email, String password, context) async {
    dio.options.headers['Content-Type'] = 'application/json';
    try {
      Response response = await dio.post(
          "https://fichamedicadigital.herokuapp.com/usuarios/login",
          data: {"email": email, "password": password});
          var nome = response.data["primeiroNome"] + " " +  response.data["sobreNome"];
      Navigator.push(
          context, MaterialPageRoute(builder: (context) => MainPage(nome: nome, id: response.data["id"].toString())));
    } catch (e) {
      throw e.toString();
    }
  }

  register(
      context,
      date,
      TextEditingController emailController,
      TextEditingController nameController,
      TextEditingController passwordController, TextEditingController sobrenomeController) async {
    dio.options.headers['Content-Type'] = 'application/json';

    try {
      Response response = await dio.post("https://fichamedicadigital.herokuapp.com/usuarios", data: {
        "dataNascimento": date.toIso8601String(),
        "email": emailController.text,
        "password": passwordController.text,
        "primeiroNome": nameController.text,
        "sobreNome": sobrenomeController.text
      });
      var nome = response.data["primeiroNome"] + " " + response.data["sobreNome"];
      Navigator.push(
          context, MaterialPageRoute(builder: (context) => MainPage(nome: nome, id: response.data["id"].toString())));
    } catch (e) {
      throw e.toString();
    }
  }
userData(int id) async{
  print(id);
    Response response = await dio.get("https://fichamedicadigital.herokuapp.com/fichas/1");
    return response.data.toString();
  }
}

  