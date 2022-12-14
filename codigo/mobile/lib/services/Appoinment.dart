import 'package:dio/dio.dart';
import 'package:mobile/env.dart';

class AppointmentService{
  Dio dio = Dio();
  // final String endpointUsers = '${Environment().BASE_URL}/users';
  getAppointments(int id) async {
    dio.options.headers['Content-Type'] = 'application/json';
    try {
      Response response = await dio.get(
          "https://fichamedicadigital.herokuapp.com/consultas/usuario/$id");
      return response.data;
    } catch (e) {
      throw e.toString();
    }
  }

  getAppointmentsByOfficeId(String id) async {
    Dio dio = Dio();
    try {
      dio.options.headers['Content-Type'] = 'application/json';
      Response response = await dio.get('$BASE_URL/consultas?id=$id');
      return response;
    } catch (e) {
      rethrow;
    }
  }
  getDoctor() async{
   dio.options.headers['Content-Type'] = 'application/json';
    try {
      Response response = await dio.get(
          "https://fichamedicadigital.herokuapp.com/medicos");

      return response.data;
    } catch (e) {
      throw e.toString();
    }
  }
  postAppointment(idMedico, dataConsulta, horaConsulta, id) async{
    Response idUsuario = await dio.get(
          "https://fichamedicadigital.herokuapp.com/pacientes/$id");
    DateTime newDate1 = DateTime(dataConsulta.year, dataConsulta.month, dataConsulta.day, horaConsulta.hour, (horaConsulta.minute+30));
    DateTime newDate = DateTime(dataConsulta.year, dataConsulta.month, dataConsulta.day, horaConsulta.hour, horaConsulta.minute);
    dio.options.headers['Content-Type'] = 'application/json';
    try {
      Response response = await dio.post(
          "https://fichamedicadigital.herokuapp.com/consultas", data: {"medico": {"id": idMedico}, "data": newDate.toIso8601String(), "horaFim": newDate1.toIso8601String(), "horaInicio": newDate.toIso8601String(), "paciente": {"id": idUsuario.data["id"]}});

      return response.data;
    } catch (e) {
      throw e.toString();
    }
  }
}