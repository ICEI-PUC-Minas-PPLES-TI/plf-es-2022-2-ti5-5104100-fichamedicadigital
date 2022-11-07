import 'dart:convert';
import 'dart:io';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

import '../mainPage.dart';
class AppointmentService{
  Dio dio = Dio();
  // final String endpointUsers = '${Environment().BASE_URL}/users';
  getAppointments() async {
    dio.options.headers['Content-Type'] = 'application/json';
    try {
      Response response = await dio.get(
          "https://fichamedicadigital.herokuapp.com/consultas");
      return response.data;
    } catch (e) {
      throw e.toString();
    }
  }
}