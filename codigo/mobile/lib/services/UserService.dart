import 'dart:io';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/env.dart';
import 'package:mobile/main.dart';

class UserService {
  final dio = Dio();
  final String endpointUsers = '${Environment().BASE_URL}/users';

  login(String email, String password) async {
    Response response = await dio.post(
        "fichamedicadigital.herokuapp.com/usuarios/login",
        data: {'user': email, 'password': password});
    return response.data;
    // Navigator.push(
    //     context,
    //     MaterialPageRoute(
    //         builder: (context) =>
    //             const HomePage(title: "FMD - usuário logado")));
  }

  void register(context) {
    Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) =>
                const HomePage(title: "FMD - usuário logado")));
  }
}
