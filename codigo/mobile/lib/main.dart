import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'userData.dart';

void main() {
  runApp(MaterialApp(
    home: MainScreen(),
  ));
}

class MainScreen extends StatefulWidget {
  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  TextEditingController _textEditingController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Container(
              child: Row(children: <Widget>[
            Image.asset('images/icon.png', width: 46, height: 46),
            const Padding(
                padding: EdgeInsets.only(left: 15),
                child: Text('Ficha Médica Digital')),
            // ignore: prefer_const_constructors
            Padding(
              padding: EdgeInsets.only(left: 30),
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
          ])),
          backgroundColor: Color.fromARGB(255, 41, 168, 206),
        ),
        body: Container(
          child: Column(
            children: <Widget>[
              Container(
                constraints: BoxConstraints.expand(
                  height:
                      Theme.of(context).textTheme.headline4!.fontSize! * 1.1 +
                          200.0,
                ),
                margin: const EdgeInsets.only(bottom: 15),
                alignment: Alignment.center,
                width: MediaQuery.of(context).size.width,
                color: Colors.grey,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Padding(
                      padding: EdgeInsets.only(bottom: 15),
                      child: Image.asset('images/icon.png',
                          width: 120, height: 120),
                    ),
                    const Text(
                      'Fulano da Silva',
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.w800),
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
                        fixedSize: const Size(130, 110)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/icon.png', width: 55, height: 57),
                        const Padding(padding: EdgeInsets.only(top: 10),
                          child: Text("Chat",
                         textAlign: TextAlign.center, 
                        style:
                          TextStyle(fontSize: 16))
                        )
                       ,
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
                        fixedSize: const Size(130, 110)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/icon.png', width: 55, height: 57),
                        const Padding(padding: EdgeInsets.only(top: 10),
                        child: Text("Ficha Médica", textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 16)),
                        )
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
                        fixedSize: const Size(130, 110)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/icon.png', width: 55, height: 57),
                        const Padding(padding: EdgeInsets.only(top: 10),
                        child: Text("Exames", textAlign: TextAlign.center,
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
                        fixedSize: const Size(130, 110)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/icon.png', width: 55, height: 57),
                        const Padding(padding: EdgeInsets.only(top: 10),
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
                        fixedSize: const Size(130, 110)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Image.asset('images/icon.png', width: 55, height: 57),
                        const Padding(padding: EdgeInsets.only(top: 10),
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
        ));
  }
}
