import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:mobile/services/UserService.dart';

class SegundaTela extends StatefulWidget {
  String valor;
  int id;
  SegundaTela({required this.valor, required this.id});
  @override
  _SegundaTelaState createState() => _SegundaTelaState();
}

class VacinaData {
  //modal class for Person object
  String nome, doses;
  VacinaData({required this.nome, required this.doses});
}

class _SegundaTelaState extends State<SegundaTela> {
  late bool cardiaco,
      desmaioOuConvulsao,
      diabetico,
      internado,
      intoleranciaLactose,
      transfusao;
  List<VacinaData> data = [];
  late String cartaoSus, convenio, numeroCarteirinha, tipoSanguineo;
  late List<dynamic> doencas, medicamentos, medicamentosAlergia;
  late String sobreNome, primeiroNome;
  late DateTime dataTransfusao;
  int i = 0;
  @override
  void initState() {
    int meuId = widget.id;
    UserService().userData(meuId).then((value) {
      cartaoSus = value['cartaoSus'] == null
          ? "Não possui"
          : value['cartaoSus'].toString();
      cardiaco = value['cardiaco'];
      doencas = value['doencas'];
      sobreNome = value['usuario']['sobreNome'].toString();
      primeiroNome = value['usuario']['primeiroNome'].toString();
      medicamentos = value['medicamentos'];
      medicamentosAlergia = value['medicamentosAlergia'];
      desmaioOuConvulsao = value['desmaioOuConvulsao'];
      diabetico = value['diabetico'];
      internado = value['internado'];
      intoleranciaLactose = value['intoleranciaLactose'];
      transfusao = value['transfusao'];
      // dataTransfusao = value['dataTransfusao'] == null
      //     ? DateTime.now()
      //     : value['dataTransfusao'];
      // convenio = value['convenio'] = value['convenio'].toString();
      // numeroCarteirinha = value['numeroCarteirinha'].toString();
      tipoSanguineo = value['tipoSanguineo'].toString();
      // vacinas = value['vacinas'];
      // if(!vacinas.isEmpty){
      //   while (i < vacinas.length) {
      //     data.add(
      //         VacinaData(nome: vacinas[i]['nome'], doses: vacinas[i]['doses']));
      //     i++;
      //   }
      // }
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<dynamic>(
        future: UserService().userData(widget.id),
        builder: (context, snapshot) {
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
              body: snapshot.hasData
                  ? SingleChildScrollView(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text(primeiroNome + sobreNome,
                              style: const TextStyle(fontSize: 24)),
                          Row(
                            children: [
                              const Text("Nº do cartão do SUS:",
                                  style: TextStyle(fontSize: 14)),
                              Padding(
                                  padding: const EdgeInsets.only(left: 15),
                                  child: Text(cartaoSus,
                                      style: TextStyle(
                                          fontSize: 14,
                                          color:
                                              Colors.black.withOpacity(0.5)))),
                            ],
                          ),
                          const Padding(
                              padding: EdgeInsets.only(top: 15),
                              child: Text("Plano de saude: ",
                                  style: TextStyle(
                                      fontSize: 20,
                                      fontWeight: FontWeight.w800))),
                          // Row(
                          //   children: <Widget>[
                          //     const Text("Nº da carteirinha: ",
                          //         style: TextStyle(fontSize: 14)),
                          //     Padding(
                          //         padding: const EdgeInsets.only(left: 15),
                          //         child: Text(numeroCarteirinha,
                          //             style: TextStyle(
                          //                 fontSize: 14,
                          //                 color:
                          //                     Colors.black.withOpacity(0.5)))),
                          //   ],
                          // ),
                          // Row(
                          //   children: <Widget>[
                          //     const Text("Convênio",
                          //         style: TextStyle(fontSize: 14)),
                          //     Padding(
                          //         padding: const EdgeInsets.only(left: 15),
                          //         child: Text(convenio,
                          //             style: TextStyle(
                          //                 fontSize: 14,
                          //                 color:
                          //                     Colors.black.withOpacity(0.5)))),
                          //   ],
                          // ),
                          // Column(
                          //   children: [
                          //     data.isEmpty
                          //         ? Column()
                          //         : Column(
                          //             children: [
                          //               const Padding(
                          //                   padding: EdgeInsets.only(top: 15),
                          //                   child: Text("Dados de Vacinação: ",
                          //                       style: TextStyle(
                          //                           fontSize: 20,
                          //                           fontWeight:
                          //                               FontWeight.w800))),
                          //               Row(
                          //                 children: vacinas.map((item) {
                          //                   return Column(children: [
                          //                     ListTile(
                          //                       title: Text(item.exame,
                          //                           style: const TextStyle(
                          //                               fontSize: 20)),
                          //                       subtitle: Text(
                          //                           '${item.nome}\n${item.doses}',
                          //                           style: const TextStyle(
                          //                               fontSize: 14)),
                          //                     )
                          //                   ]);
                          //                 }).toList(),
                          //               )
                          //             ],
                          //           ),
                          //   ],
                          // ),
                          const Padding(
                              padding: EdgeInsets.only(top: 15),
                              child: Text("Dados: ",
                                  style: TextStyle(
                                      fontSize: 20,
                                      fontWeight: FontWeight.w800))),
                          Wrap(
                            spacing: 10.0,
                            children: <Widget>[
                              const Text("Doenças que já teve:",
                                  style: TextStyle(fontSize: 14)),
                              Expanded(
                                  child: ListView.builder(
                                      shrinkWrap: true,
                                      itemCount: doencas.length,
                                      itemBuilder:
                                          (BuildContext context, int index) {
                                        return Text(doencas[index],
                                            style: TextStyle(
                                                fontSize: 14,
                                                color: Colors.black
                                                    .withOpacity(0.5)));
                                      })),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              const Text("Tem/teve problema no coração: ",
                                  style: TextStyle(fontSize: 14)),
                              Padding(
                                  padding: const EdgeInsets.only(left: 15),
                                  child: cardiaco
                                      ? Text("sim",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5)))
                                      : Text("não",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5)))),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              const Text("Medicamentos com alergia: ",
                                  style: TextStyle(fontSize: 14)),
                              medicamentosAlergia.isEmpty
                                  ? Padding(
                                      padding: const EdgeInsets.only(left: 15),
                                      child: Text("Não possui",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5))))
                                  : Expanded(
                                      child: ListView.builder(
                                          shrinkWrap: true,
                                          itemCount: medicamentosAlergia.length,
                                          itemBuilder: (BuildContext context,
                                              int index) {
                                            return Text(
                                                medicamentosAlergia[index],
                                                style: TextStyle(
                                                    fontSize: 14,
                                                    color: Colors.black
                                                        .withOpacity(0.5)));
                                          })),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              const Text("Intolerância a lactose: ",
                                  style: TextStyle(fontSize: 14)),
                              Padding(
                                  padding: const EdgeInsets.only(left: 15),
                                  child: intoleranciaLactose
                                      ? Text("sim",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5)))
                                      : Text("não",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5)))),
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
                                          color:
                                              Colors.black.withOpacity(0.5)))),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              const Text("Medicações: ",
                                  style: TextStyle(fontSize: 14)),
                              medicamentos.isEmpty
                                  ? Padding(
                                      padding: const EdgeInsets.only(left: 15),
                                      child: Text("Não possui",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5))))
                                  : Expanded(
                                      child: ListView.builder(
                                          shrinkWrap: true,
                                          itemCount: medicamentos.length,
                                          itemBuilder: (BuildContext context,
                                              int index) {
                                            return Text(medicamentos[index],
                                                style: TextStyle(
                                                    fontSize: 14,
                                                    color: Colors.black
                                                        .withOpacity(0.5)));
                                          })),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              const Text("Diabetes: ",
                                  style: TextStyle(fontSize: 14)),
                              Padding(
                                  padding: const EdgeInsets.only(left: 15),
                                  child: diabetico
                                      ? Text("sim",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5)))
                                      : Text("não",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5)))),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              const Text("Cirurgias: ",
                                  style: TextStyle(fontSize: 14)),
                              Padding(
                                  padding: const EdgeInsets.only(left: 15),
                                  child: Text("2002 - 2010 - 2019",
                                      style: TextStyle(
                                          fontSize: 14,
                                          color:
                                              Colors.black.withOpacity(0.5)))),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              const Text("Já recebeu transfusão? ",
                                  style: TextStyle(fontSize: 14)),
                              transfusao
                                  ? Padding(
                                      padding: const EdgeInsets.only(left: 15),
                                      child: Text("sim",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5))))
                                  : Padding(
                                      padding: const EdgeInsets.only(left: 15),
                                      child: Text("não",
                                          style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black
                                                  .withOpacity(0.5)))),
                            ],
                          ),
                          // transfusao
                          //     ? Row(
                          //         children: <Widget>[
                          //           const Text("Quando: ",
                          //               style: TextStyle(fontSize: 14)),
                          //           Padding(
                          //               padding:
                          //                   const EdgeInsets.only(left: 15),
                          //               child: Text(
                          //                   dataTransfusao.day.toString() +
                          //                       dataTransfusao.month
                          //                           .toString() +
                          //                       dataTransfusao.year.toString(),
                          //                   style: TextStyle(
                          //                       fontSize: 14,
                          //                       color: Colors.black
                          //                           .withOpacity(0.5)))),
                          //         ],
                          //       )
                          //     : Row()
                        ],
                      ),
                    )
                  : Column());
        });
  }
}
