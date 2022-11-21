import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'examUnit.dart';

const List<String> list = <String>['Todos', 'Nutricionista', 'Dermatologista'];

class Exam extends StatefulWidget {
  int id;
  Exam({required this.id});
  @override
  _examState createState() => _examState();
}

class ExamData {
  //modal class for Person object
  String exame, nome, date;
  ExamData({required this.exame, required this.nome, required this.date});
}

class _examState extends State<Exam> {
  String dropdownValue = list.first;
  List<ExamData> data = [];
  int i = 0;
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
        body: Column(children: <Widget>[
          Expanded(
              child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: data.length,
                  itemBuilder: (BuildContext context, int index) {
                    return ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          fixedSize: const Size(328, 74),
                          backgroundColor:
                              const Color.fromARGB(255, 208, 243, 239),
                        ),
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => ExamUnit(
                                    name: data[index].nome, exame: data[index].exame)),
                          );
                        },
                        child: ListTile(
                          title: Text(data[index].nome,
                              style: TextStyle(fontSize: 20)),
                          subtitle: Text(data[index].date,
                              style: TextStyle(fontSize: 14)),
                        ));
                  })),
          Center(
              child: Column(
            children: data.map((personone) {
              return Container(
                  margin: const EdgeInsets.only(bottom: 10.0),
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      fixedSize: const Size(328, 74),
                      backgroundColor: const Color.fromARGB(255, 208, 243, 239),
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => ExamUnit(
                                name: personone.exame, exame: "Teste")),
                      );
                    },
                    child: ListTile(
                      title:
                          Text(personone.exame, style: TextStyle(fontSize: 20)),
                      subtitle: Text('${personone.nome}\n${personone.date}',
                          style: TextStyle(fontSize: 14)),
                    ),
                  ));
            }).toList(),
          )),
        ]));
  }
}
