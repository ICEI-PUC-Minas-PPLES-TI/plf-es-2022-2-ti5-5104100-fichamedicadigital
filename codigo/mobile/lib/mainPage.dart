import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:mobile/services/UserService.dart';
import 'package:mobile/userData.dart';

import 'exam.dart';

class MainPage extends StatefulWidget {
  String nome, id;
  MainPage({required this.nome, required this.id});
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  final TextEditingController _textEditingController = TextEditingController();
  @override
  void initState() {
    int? meuId = int.tryParse(widget.id);
    if(meuId == null) return;
    UserService().userData(meuId).then((value){
      print(value);
    });
    super.initState();
  }
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
      body: Column(
        children: <Widget>[
          Container(
            constraints: BoxConstraints.expand(
              height: Theme.of(context).textTheme.headline4!.fontSize! * 1.1 +
                  200.0,
            ),
            margin: const EdgeInsets.only(bottom: 15),
            alignment: Alignment.center,
            width: MediaQuery.of(context).size.width,
            color: const Color.fromARGB(255, 208, 243, 239),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(bottom: 15),
                  child: Container(
                    width: 100.0,
                    height: 100.0,
                    decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        image: DecorationImage(
                            fit: BoxFit.fill,
                            image: AssetImage('images/profileIcon.jpeg'))),
                  ),
                ),
                Text(
                  widget.nome,
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w800),
                ),
                const Text('Tipo sanguíneo: O+'),
                const Text('Soropositivo: positivo')
              ],
            ),
          ),
          Wrap(
            spacing: 10.0,
            runSpacing: 8.0,
            children: <Widget>[
              Flexible(
                  fit: FlexFit.loose,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => SegundaTela(
                                valor: _textEditingController.text)),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                        fixedSize: const Size(130, 110),
                        backgroundColor:
                            const Color.fromARGB(255, 62, 173, 173)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/chat.png', width: 55, height: 57),
                        const Padding(
                            padding: EdgeInsets.only(top: 10),
                            child: Text("Chat",
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 16))),
                      ],
                    ),
                  )),
              Flexible(
                  fit: FlexFit.loose,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => SegundaTela(
                                valor: _textEditingController.text)),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                        fixedSize: const Size(130, 110),
                        backgroundColor:
                            const Color.fromARGB(255, 62, 173, 173)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/medicalFile.png',
                            width: 55, height: 57),
                        const Padding(
                          padding: EdgeInsets.only(top: 10),
                          child: Text("Ficha Médica",
                              textAlign: TextAlign.center,
                              style: TextStyle(fontSize: 16)),
                        )
                      ],
                    ),
                  )),
              Flexible(
                  fit: FlexFit.loose,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.push(context,
                          MaterialPageRoute(builder: (context) => Exam()));
                    },
                    style: ElevatedButton.styleFrom(
                        fixedSize: const Size(130, 110),
                        backgroundColor:
                            const Color.fromARGB(255, 62, 173, 173)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/examination.png',
                            width: 55, height: 57),
                        const Padding(
                            padding: EdgeInsets.only(top: 10),
                            child: Text("Exames",
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 16))),
                      ],
                    ),
                  )),
              Flexible(
                  fit: FlexFit.loose,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => SegundaTela(
                                valor: _textEditingController.text)),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                        fixedSize: const Size(130, 110),
                        backgroundColor:
                            const Color.fromARGB(255, 62, 173, 173)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/myAppoinments.png',
                            width: 55, height: 57),
                        const Padding(
                            padding: EdgeInsets.only(top: 10),
                            child: Text("Minhas Consultas",
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 16))),
                      ],
                    ),
                  )),
              Flexible(
                  fit: FlexFit.loose,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => SegundaTela(
                                valor: _textEditingController.text)),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                        fixedSize: const Size(130, 110),
                        backgroundColor:
                            const Color.fromARGB(255, 62, 173, 173)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/appointment.png',
                            width: 55, height: 57),
                        const Padding(
                            padding: EdgeInsets.only(top: 10),
                            child: Text("Agendar Consulta",
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 16))),
                      ],
                    ),
                  )),
            ],
          )
        ],
      ),
    );
  }
}
