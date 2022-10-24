import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class SegundaTela extends StatefulWidget {
  String valor;
  SegundaTela({required this.valor});
  @override
  _SegundaTelaState createState() => _SegundaTelaState();
}

class _SegundaTelaState extends State<SegundaTela> {
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
        body: Container(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              const Text("Fulano da Silva", style: TextStyle(fontSize: 24)),
              Row(
                children: [
                  const Text("Nº do cartão do SUS:",
                      style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("0000000",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              const Padding(
                  padding: EdgeInsets.only(top: 15),
                  child: Text("Plano de saude: ",
                      style: TextStyle(
                          fontSize: 20, fontWeight: FontWeight.w800))),
              Row(
                children: <Widget>[
                  const Text("Nº da carteirinha: ",
                      style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("0000000",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Convênio", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("Unipart-Flex",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              const Padding(
                  padding: EdgeInsets.only(top: 15),
                  child: Text("Dados de Vacinação: ",
                      style: TextStyle(
                          fontSize: 20, fontWeight: FontWeight.w800))),
              Row(
                children: <Widget>[
                  const Text("Covid: ", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("3 dose",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Outras vacinas:", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("atrasado",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              const Padding(
                  padding: EdgeInsets.only(top: 15),
                  child: Text("Dados: ",
                      style: TextStyle(
                          fontSize: 20, fontWeight: FontWeight.w800))),
              Row(
                children: <Widget>[
                  const Text("Vive com: ", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("pais",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Wrap(
                spacing: 10.0,
                children: <Widget>[
                  const Text("Doenças que já teve:",
                      style: TextStyle(fontSize: 14)),
                  Text("catapora - dengue - caxumba",
                      style: TextStyle(
                          fontSize: 14, color: Colors.black.withOpacity(0.5))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Tem/teve problema no coração: ",
                      style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("não",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Medicamentos com alergia: ",
                      style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("Tilenol",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Intolerância a lactose: ",
                      style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("não",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Deficiência: ", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("não",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Desmaio ou convulsão: ",
                      style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("não",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Medicações: ", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("Rivotril",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Diabetes: ", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("não",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Cirurgias: ", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("2002 - 2010 - 2019",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Cirurgias: ", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("não",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Já recebeu transfusão? ",
                      style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("sim",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              ),
              Row(
                children: <Widget>[
                  const Text("Quando: ", style: TextStyle(fontSize: 14)),
                  Padding(
                      padding: const EdgeInsets.only(left: 15),
                      child: Text("não sabe",
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.black.withOpacity(0.5)))),
                ],
              )
            ],
          ),
        ));
  }
}
