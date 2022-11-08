import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:mobile/services/Appoinment.dart';
import 'examUnit.dart';

const List<String> list = <String>['Todos', 'Pedente', 'Cancelado', 'Marcada', 'Finalizada'];

class myAppointment extends StatefulWidget {
  @override
  _myAppointmentState  createState() => _myAppointmentState();
}

class ExamData {
  //modal class for Person object
  String exame, medico, date;
  ExamData({required this.exame, required this.medico, required this.date});
}

class _myAppointmentState extends State<myAppointment> {
  @override
  late List<dynamic> content;
  void initState() {
    AppointmentService().getAppointments().then((value) {
      content = value;
    });
  }
  String dropdownValue = list.first;
  Iterable<ExamData> filter = [];
  List<ExamData> data = [];
  int i = 0;
  @override
  Widget build(BuildContext context) {
    return FutureBuilder<dynamic>(
        future: AppointmentService().getAppointments(),
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
        body: snapshot.hasData? Column(children: <Widget>[
          DropdownButton(
              value: dropdownValue,
              onChanged: (dynamic? value) {
                setState(() {
                  dropdownValue = value!;
                });
              },
              items: list.map<DropdownMenuItem<dynamic>>((String value) {
                data = [];
                if (dropdownValue == 'Todos') {
                  i = 0;
                  while (i < content.length) {
                    data.add(ExamData(
                        exame: content[i]["status"],
                        medico: content[i]["medico"]["primeiroNome"]+" "+content[i]["medico"]["ultimoNome"],
                        date: content[i]["horaInicio"]));
                    i++;
                  }
                } else if (dropdownValue == 'Pedente') {
                  i = 0;
                  while (i < content.length) {
                    if(content[i]["status"] == "PENDENTE"){
                      data.add(ExamData(
                        exame: content[i]["status"],
                        medico: content[i]["medico"]["primeiroNome"]+" "+content[i]["medico"]["ultimoNome"],
                        date: content[i]["horaInicio"]));
                    }                    
                    i++;
                  }
                }
                else if (dropdownValue == 'Cancelado') {
                  i = 0;
                  while (i < content.length) {
                    if(content[i]["status"] == "CANCELADA"){
                      data.add(ExamData(
                        exame: content[i]["status"],
                        medico: content[i]["medico"]["primeiroNome"]+" "+content[i]["medico"]["ultimoNome"],
                        date: content[i]["horaInicio"]));
                    }                    
                    i++;
                  }
                }
                else if (dropdownValue == 'Marcada') {
                  i = 0;
                  while (i < content.length) {
                    if(content[i]["status"] == "MARCADA"){
                      data.add(ExamData(
                        exame: content[i]["status"],
                        medico: content[i]["medico"]["primeiroNome"]+" "+content[i]["medico"]["ultimoNome"],
                        date: content[i]["horaInicio"]));
                    }                    
                    i++;
                  }
                } else {
                  i = 0;
                  while (i < content.length) {
                    if(content[i]["status"] == "FINALIZADA"){
                      data.add(ExamData(
                        exame: content[i]["status"],
                        medico: content[i]["medico"]["primeiroNome"]+" "+content[i]["medico"]["ultimoNome"],
                        date: content[i]["horaInicio"]));
                    }                    
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
                      title:
                          Text("Médico: " + personone.medico, style: TextStyle(fontSize: 20)),
                      subtitle: Text('${personone.exame}\n${personone.date}',
                          style: TextStyle(fontSize: 14)),
                    ),
                  ));
            }).toList(),
          )),
        ]): Column());
        });
  }
}
