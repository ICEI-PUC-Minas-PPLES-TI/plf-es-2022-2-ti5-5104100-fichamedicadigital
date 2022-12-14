import 'dart:io';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mobile/examUnit.dart';

class ExamService {
  Dio dio = Dio();

  uploadFile(File file, String nome, context, id) async {
    if (file == null) {
      // Scaffold.of(context)
      //     .showSnackBar(const SnackBar(content: Text("Unable to Upload")));
      return null;
    }else{
      try{
        String fileName = file.path.split('/').last;
        dio.options.headers['Content-Type'] = 'multipart/form-data';
        dio.options.headers['Content-Length'] = file.lengthSync().toString();
        FormData formData = FormData.fromMap({'file': await MultipartFile.fromFile(file.path, filename:fileName)});
        Response response = await dio.post("https://fichamedicadigital.herokuapp.com/exames/imagem", data: formData);
        if(response.data["uri"].toString().isNotEmpty){
          dio.options.headers['Content-Type'] = 'application/json';
          Response result = await dio.post("https://fichamedicadigital.herokuapp.com/exames", data: {"nomeExame": nome, "url": response.data["uri"].toString(), "idUsuario": id});
          Navigator.push(
          context, MaterialPageRoute(builder: (context) => ExamUnit(name: nome, exame: result.data["url"].toString())));
        }
      }catch (e) {
        throw e.toString();
      }
      
    }
  }
  getUserExams(int id) async {
    dio.options.headers['Content-Type'] = 'application/json';
    try {
      Response response = await dio.get(
          "https://fichamedicadigital.herokuapp.com/exames/usuario/$id");

      return response.data;
    } catch (e) {
      throw e.toString();
    }
  }
}
