import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class ExamUnit extends StatefulWidget {
  String name, date;
  ExamUnit({required this.name, required this.date});
  @override
  _ExamUnitState createState() => _ExamUnitState();
}

class _ExamUnitState extends State<ExamUnit> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Container(
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
              Image.asset('images/icon.png', width: 46, height: 46),
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
        Text(widget.date),
        const Text("Baixar Exame")
      ]),
    );
  }
}
