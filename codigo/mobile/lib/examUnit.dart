import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:advance_pdf_viewer/advance_pdf_viewer.dart';
import 'package:mobile/services/examService.dart';

class ExamUnit extends StatefulWidget {
  String name, exame;
  ExamUnit({required this.name, required this.exame});
  @override
  _ExamUnitState createState() => _ExamUnitState();
}

class _ExamUnitState extends State<ExamUnit> {
  bool _isLoading = true;
  late PDFDocument content;
  void initState() {
    String meuExame = widget.exame;
    ExamService().getPdf(meuExame).then((value) {
      print(value);
      content = value;
      _isLoading = false;
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Container(
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
              const Padding(
                padding: EdgeInsets.only(left: 15),
                child: Text('Ficha Médica Digital',
                    style: TextStyle(fontSize: 20)),
              ),
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
            ])),
        backgroundColor: const Color.fromARGB(255, 62, 173, 173),
      ),
      body: Column(children: <Widget>[
        Text(widget.name),
        const Text("20/03/2022"),
        _isLoading? Center(child: CircularProgressIndicator()): PDFViewer(document: content),
        const Text("Baixar Exame")
      ]),
    );
  }
}
