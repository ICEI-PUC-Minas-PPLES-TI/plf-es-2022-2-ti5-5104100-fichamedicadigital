// import 'package:flutter/material.dart';
// import 'package:sqflite/sqflite.dart';
// import 'package:path/path.dart';

// class AppointmentServiceLocal{

//   _recuperarBancoDados() async {
//     final caminhoBancoDados = await getDatabasesPath();
//     final localBancoDados = join(caminhoBancoDados, "bancoConsulta.bd");
//     var bd = await openDatabase(
//         localBancoDados,
//         version: 1,
//         onCreate: (db, dbVersaoRecente){
//           String sql = "CREATE TABLE consulta (id INTEGER PRIMARY KEY AUTOINCREMENT, medico VARCHAR, especialidade VARCHAR, status VARCHAR, data DATE) ";
//           db.execute(sql);
//         }
//     );
//     return bd;
//     //print("aberto: " + bd.isOpen.toString() );
//   }

//   salvarDados(String nome, String especialidade, String status, DateTime data) async {
//     Database bd = await _recuperarBancoDados();
//     Map<String, dynamic> dadosConsulta = {
//       "medico" : nome,
//       "especialidade" : especialidade,
//       "status": status,
//       "data": data
//     };
//     int id = await bd.insert("consulta", dadosConsulta);
//   }

//   listarConsultas() async{
//     Database bd = await _recuperarBancoDados();
//     String sql = "SELECT * FROM consultas";
//     //String sql = "SELECT * FROM usuarios WHERE idade=58";
//     //String sql = "SELECT * FROM usuarios WHERE idade >=30 AND idade <=58";
//     //String sql = "SELECT * FROM usuarios WHERE idade BETWEEN 18 AND 58";
//     //String sql = "SELECT * FROM usuarios WHERE nome='Maria Silva'";
//     List consultas = await bd.rawQuery(sql); //conseguimos escrever a query que quisermos
//     return consultas;
//   }

//   // _listarUmUsuario(int id) async{
//   //   Database bd = await _recuperarBancoDados();
//   //   List usuarios = await bd.query(
//   //       "usuarios",
//   //       columns: ["id", "nome", "idade"],
//   //       where: "id = ?",
//   //       whereArgs: [id]
//   //   );
//   //   for(var usu in usuarios){
//   //     print(" id: "+usu['id'].toString() +
//   //         " nome: "+usu['nome']+
//   //         " idade: "+usu['idade'].toString());
//   //   }
//   // }

//   /*_excluirUsuario(int id) async{
//     Database bd = await _recuperarBancoDados();
//     int retorno = await bd.delete(
//         "usuarios",
//         where: "id = ?",  //caracter curinga
//         whereArgs: [id]
//     );
//     print("Itens excluidos: "+retorno.toString());
//   }*/

//   _excluirUsuario() async{
//     Database bd = await _recuperarBancoDados();
//     int retorno = await bd.delete(
//         "consultas",
//         where: "id = ?"
//     );
//   }

//   _atualizarUsuario(int id, DateTime data) async{
//     Database bd = await _recuperarBancoDados();
//     Map<String, dynamic> dadosUsuario = {
//       "data" : data
//     };
//     int retorno = await bd.update(
//         "usuarios", dadosUsuario,
//         where: "id = ?",  //caracter curinga
//         whereArgs: [id]
//     );
//   }

// }

