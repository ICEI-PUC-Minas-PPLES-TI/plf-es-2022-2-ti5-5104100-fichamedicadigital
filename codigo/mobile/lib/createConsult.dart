import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:mobile/services/Appoinment.dart';
import 'package:mobile/services/UserService.dart';

class CreateConsult extends StatefulWidget {
  int id;
  CreateConsult({required this.id});
  @override
  _CreateConsultState createState() => _CreateConsultState();
}

class _CreateConsultState extends State<CreateConsult> {
  DateTime date = DateTime(2022);
  late String dropdownvalue;
  TimeOfDay time = TimeOfDay.now();
  late List<dynamic> content = [];
  int i = 0;
  @override
  void initState() {
    AppointmentService().getDoctor().then((value) {
      content = value;
      print(content);
    });
    super.initState();
  }

  Widget build(BuildContext context) {
    // List of items in our dropdown menu
    return FutureBuilder<dynamic>(
        future: AppointmentService().getDoctor(),
        builder: (context, snapshot) {
          if(snapshot.hasData) dropdownvalue = snapshot.data.first["id"].toString();
          return Scaffold(
              backgroundColor: Color.fromARGB(255, 208, 243, 239),
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
              body: snapshot.hasData
                  ? Center(
                      child: Padding(
                          padding: const EdgeInsets.only(
                              left: 32.0, top: 0.0, right: 32.0, bottom: 0.0),
                          child:
                              Column(mainAxisSize: MainAxisSize.min, children: [
                            dropdownvalue.isNotEmpty
                                ? DropdownButton(
                                    // Initial Value
                                    value: dropdownvalue,

                                    // Down Arrow Icon
                                    icon: const Icon(Icons.keyboard_arrow_down),

                                    // Array list of items
                                    items:
                                        (content as List<dynamic>).map((items) {
                                      print(items);
                                      return DropdownMenuItem(
                                        value: items["id"].toString(),
                                        child: Text(
                                            items["primeiroNome"].toString() +
                                                items["ultimoNome"].toString()),
                                      );
                                    }).toList(),
                                    // After selecting the desired option,it will
                                    // change button value to selected value
                                    onChanged: (String? newValue) {
                                      setState(() {
                                        dropdownvalue = newValue!;
                                      });
                                    },
                                  )
                                : const Center(
                                    child: CircularProgressIndicator()),
                            Column(
                              children: <Widget>[
                                const Padding(padding: EdgeInsets.only(top: 8)),
                                const Text("Data da consulta:",
                                    style: TextStyle(color: Colors.white)),
                                ElevatedButton(
                                  onPressed: () async {
                                    await showDatePicker(
                                      context: context,
                                      initialDate: DateTime(2022),
                                      firstDate: DateTime(1900),
                                      lastDate: DateTime(2100),
                                    ).then((value) {
                                      setState(() {
                                        date = value!;
                                      });
                                      return null;
                                    });
                                  },
                                  child: const Text('Selecionar data'),
                                )
                              ],
                            ),
                            Column(
                              children: <Widget>[
                                const Padding(padding: EdgeInsets.only(top: 8)),
                                const Text("Horário da consulta:",
                                    style: TextStyle(color: Colors.white)),
                                ElevatedButton(
                                  onPressed: () async {
                                    await showTimePicker(
                                      initialTime: TimeOfDay.now(),
                                      context: context,
                                    ).then((value) {
                                      setState(() {
                                        time = value!;
                                      });
                                      return null;
                                    });
                                  },
                                  child: const Text('Selecionar hora'),
                                )
                              ],
                            ),
                            ElevatedButton(
                                onPressed: () {
                                  AppointmentService().postAppointment(
                                      dropdownvalue, date, time, widget.id);
                                },
                                style: const ButtonStyle(
                                  backgroundColor: MaterialStatePropertyAll(
                                      Color.fromARGB(255, 25, 53, 98)),
                                  textStyle: MaterialStatePropertyAll(
                                      TextStyle(fontWeight: FontWeight.bold)),
                                ),
                                child: const Padding(
                                  padding: EdgeInsets.only(
                                      left: 32.0,
                                      top: 16.0,
                                      right: 32.0,
                                      bottom: 16.0),
                                  child: Text("Marcar Consulta"),
                                ))
                          ])))
                  : const Center(child: CircularProgressIndicator()));
        });
  }
}
