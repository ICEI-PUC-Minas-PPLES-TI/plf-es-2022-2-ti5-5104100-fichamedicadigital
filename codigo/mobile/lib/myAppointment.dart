import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'examUnit.dart';

const List<String> list = <String>['Todos', 'Nutricionista', 'Dermatologista'];

class Exam extends StatefulWidget {
  @override
  _examState createState() => _examState();
}

class ExamData {
  //modal class for Person object
  String exame, medico, date;
  ExamData({required this.exame, required this.medico, required this.date});
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
          DropdownButton(
              value: dropdownValue,
              onChanged: (String? value) {
                setState(() {
                  dropdownValue = value!;
                });
              },
              items: list.map<DropdownMenuItem<String>>((String value) {
                data = [];
                if (dropdownValue == 'Todos') {
                  i = 0;
                  while (i < 8) {
                    data.add(ExamData(
                        exame: "Bolsa de cocô",
                        medico: "Bolonaro",
                        date: "22/10/2018"));
                    i++;
                  }
                } else if (dropdownValue == 'Nutricionista') {
                  i = 0;
                  while (i < 5) {
                    data.add(ExamData(
                        exame: "Brilha uma estrela",
                        medico: "Lulala",
                        date: "22/10/2018"));
                    i++;
                  }
                } else {
                  i = 0;
                  while (i < 3) {
                    data.add(ExamData(
                        exame: "Laerte laerte laerte",
                        medico: "Cleiton",
                        date: "22/10/2018"));
                    i++;
                  }
                }

                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value),
                );
              }).toList()),
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
                            name: personone.exame, date: personone.date)),
                  );
                },
                child: ListTile(
                  title: Text(personone.exame, style: TextStyle(fontSize: 20)),
                  subtitle: Text('${personone.medico}\n${personone.date}', style: TextStyle(fontSize: 14)),
                ),
              ));
            }).toList(),
          )),
        ]));
  }
}
