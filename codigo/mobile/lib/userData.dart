
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
  bool intoleranciaLactose = false;
  bool cardiaco = false,
      desmaioOuConvulsao = false,
      internado = false,
      transfusao = false;
  List<VacinaData> data = [];
  late String cartaoSus, convenio, nCarteirinha, tipoSanguineo;
  late List<dynamic> doencas, medicamentos, medicamentosAlergia, vacinas;
  late String sobreNome, primeiroNome;
  late DateTime dataTransfusao;
  int i = 0;
  @override
  void initState() {
    int meuId = widget.id;
    UserService().userData(meuId).then((value) {
      print(value);
      cartaoSus = value['cartaoSus'] == null
          ? "Não possui"
          : value['cartaoSus'].toString();
      nCarteirinha = value['numeroCarteirinha'] == null
          ? "Não possui"
          : value['numeroCarteirinha'].toString();
      convenio = value['convenio'] == null
          ? "Não possui"
          : value['convenio'].toString();
      cardiaco = value['cardiaco'];
      doencas = value['doencas'];
      sobreNome = value['usuario']['sobreNome'].toString();
      medicamentos = value['medicamentos'];
      medicamentosAlergia = value['medicamentosAlergia'];
      desmaioOuConvulsao = value['desmaioOuConvulsao'];
      internado = value['internado'];
      transfusao = value['transfusao'];
      dataTransfusao = value['dataTransfusao'] ?? DateTime.now();
      tipoSanguineo = value['tipoSanguineo'].toString();
      vacinas = value['vacinas'];
      if(vacinas.isNotEmpty){
        while (i < vacinas.length) {
          data.add(
              VacinaData(nome: vacinas[i]['nome'], doses: vacinas[i]['doses']));
          i++;
        }
      }
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<dynamic>(
        future: UserService().userData(widget.id),
        builder: (context, snapshot) {
          if(snapshot.hasData){
            intoleranciaLactose = snapshot.data['intoleranciaLactose'];
            transfusao = snapshot.data['transfusao'];
            desmaioOuConvulsao = snapshot.data['desmaioOuConvulsao'];
            internado = snapshot.data['internado'];
            primeiroNome = snapshot.data['usuario']['primeiroNome'].toString();
            sobreNome = snapshot.data['usuario']['sobreNome'].toString();
          } 
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
                          Text('$primeiroNome $sobreNome',
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
                          Row(
                            children: <Widget>[
                              const Text("Nº da carteirinha: ",
                                  style: TextStyle(fontSize: 14)),
                              Padding(
                                  padding: const EdgeInsets.only(left: 15),
                                  child: Text(nCarteirinha,
                                      style: TextStyle(
                                          fontSize: 14,
                                          color:
                                              Colors.black.withOpacity(0.5)))),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              const Text("Convênio",
                                  style: TextStyle(fontSize: 14)),
                              Padding(
                                  padding: const EdgeInsets.only(left: 15),
                                  child: Text(convenio,
                                      style: TextStyle(
                                          fontSize: 14,
                                          color:
                                              Colors.black.withOpacity(0.5)))),
                            ],
                          ),
                          Column(
                            children: [
                              data.isEmpty
                                  ? Column()
                                  : Column(
                                      children: const [
                                        Padding(
                                            padding: EdgeInsets.only(top: 15),
                                            child: Text("Dados de Vacinação: ",
                                                style: TextStyle(
                                                    fontSize: 20,
                                                    fontWeight:
                                                        FontWeight.w800))),
                                        // Row(
                                        //   children: vacinas.map((item) {
                                        //     return Column(children: [
                                        //       ListTile(
                                        //         title: Text(item.exame,
                                        //             style: const TextStyle(
                                        //                 fontSize: 20)),
                                        //         subtitle: Text(
                                        //             '${item.nome}\n${item.doses}',
                                        //             style: const TextStyle(
                                        //                 fontSize: 14)),
                                        //       )
                                        //     ]);
                                        //   }).toList(),
                                        // )
                                      ],
                                    ),
                            ],
                          ),
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
                          //
                        ],
                      ),
                    )
                  :  const Center(child: CircularProgressIndicator()));
        });
  }
}
