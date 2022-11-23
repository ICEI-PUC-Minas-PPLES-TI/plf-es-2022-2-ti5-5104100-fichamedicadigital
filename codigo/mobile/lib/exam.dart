import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:mobile/services/examService.dart';
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
  late List<dynamic> content = [];
  int i = 0;
  @override
  void initState() {
    int meuId = widget.id;
    ExamService().getUserExams(meuId).then((value) {
      content = value;
      print(content);
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<dynamic>(
        future: ExamService().getUserExams(widget.id),
        builder: (context, snapshot) {
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
              body: snapshot.hasData
                  ? Column(children: <Widget>[
                      Center(
                          child: Column(
                        children: content.map((personone) {
                          return Container(
                              margin: const EdgeInsets.only(bottom: 10.0),
                              child: ElevatedButton(
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
                                            name: personone["nomeExame"],
                                            exame: personone["url"])),
                                  );
                                },
                                child: ListTile(
                                  title: Text(personone["nomeExame"],
                                      style: const TextStyle(fontSize: 20)),
                                  subtitle: const Text("data",
                                      style: TextStyle(fontSize: 14)),
                                ),
                              ));
                        }).toList(),
                      )),
                    ])
                  : const Center(child: CircularProgressIndicator()));
        });
  }
}
