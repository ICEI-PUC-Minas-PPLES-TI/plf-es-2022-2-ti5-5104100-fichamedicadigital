
import 'package:dio/dio.dart';
import 'package:mobile/env.dart';

class OfficeService {
  Dio dio = Dio();

  /// Buscar todos os consultórios cadastrados
  Future<List> getOffices() async {
    dio.options.headers['Content-Type'] = 'application/json';
    try {
      Response response = await dio.get('$BASE_URL/consultorios');
      print('teste ${response.data}');
      return response.data['content'];
    } catch (e) {
      throw e.toString();
    }
  }

}