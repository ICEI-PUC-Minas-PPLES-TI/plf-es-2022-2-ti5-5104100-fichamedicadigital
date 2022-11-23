import 'package:dio/dio.dart';

import 'package:flutter/material.dart';
import 'dart:io';
import 'dart:typed_data';
import 'package:flutter_svg/svg.dart';
import 'package:mobile/services/UserService.dart';
import 'package:mobile/view/Register.dart';
import 'package:flutter_document_picker/flutter_document_picker.dart';
import 'package:file_picker/file_picker.dart';
import 'package:mobile/services/examService.dart';

class CreateExame extends StatefulWidget {
  int id;
  CreateExame({required this.id});
  @override
  _CreateExameState createState() => _CreateExameState();
}

class _CreateExameState extends State<CreateExame> {
  FilePickerResult? result;
  TextEditingController _enomeController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: Container(
                child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
              const Text('Ficha Médica Digital',
                  style: TextStyle(fontSize: 20)),
              // ignore: prefer_const_constructors
              Row(children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(right: 5),
                  child: SvgPicture.asset(
                      'images/streamlinehq-alarm-bell-interface-essential-48.svg',
                      width: 20,
                      height: 20,
                      semanticsLabel: 'Notificação'),
                ),
                Image.asset(
                    'images/streamlinehq-logout-2-interface-essential-48.png',
                    width: 20,
                    height: 20),
              ]),
            ]))),
        body: Container(
            color: const Color.fromARGB(255, 168, 231, 224),
            width: 400,
            height: 540,
            child: Padding(
                padding: const EdgeInsets.all(15),
                child: Column(children: <Widget>[
                  const Padding(
                    padding: EdgeInsets.only(bottom: 15),
                    child: Text("Adicionar Novo Exame ", style: TextStyle(color: Colors.white,fontSize: 24)),
                  ),
                  Row(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Expanded(
                        child: TextFormField(
                          textAlign: TextAlign.start,
                          controller: _enomeController,
                          keyboardType: TextInputType.emailAddress,
                          enabled: true,
                          decoration: const InputDecoration(
                              labelText: "Nome do exame",
                              labelStyle: TextStyle(color: Colors.white, fontSize: 20)),
                        ),
                      )
                    ],
                  ),
                  const Padding(
                    padding: EdgeInsets.only(top: 20),
                    child: Text("Fazer upload de arquivo: ", style: TextStyle(fontSize: 14)),
                  ),
                  Center(
                      child: Padding(
                          padding: const EdgeInsets.only(top: 10),
                          child: ElevatedButton(
                              child: const Icon(
                                Icons.add,
                                color: Colors.white,
                              ),
                              onPressed: () async {
                                result = await FilePicker.platform.pickFiles();
                                if (result != null) {
                                  File file = File(
                                      result!.files.single.path.toString());
                                  // ignore: use_build_context_synchronously
                                  ExamService()
                                      .uploadFile(file, _enomeController.text, context, widget.id);
                                }
                              }))),
                ]))));
  }
}
