// ignore: file_names
import 'package:flutter/material.dart';
import 'package:mobile/services/UserService.dart';

import 'Login.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({Key? key}) : super(key: key);

  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _confirmEmailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _confirmPasswordController =
      TextEditingController();
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _sobrenomeController = TextEditingController();
  DateTime date = DateTime(2022);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 208, 243, 239),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.only(
              left: 32.0, top: 0.0, right: 32.0, bottom: 0.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                color: Color.fromARGB(255, 78, 174, 163),
                width: 400,
                height: 540,
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    children: <Widget>[
                      Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          Expanded(
                            child: TextFormField(
                              textAlign: TextAlign.start,
                              controller: _nameController,
                              keyboardType: TextInputType.text,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Nome",
                                  labelStyle: TextStyle(color: Colors.white)),
                            ),
                          )
                        ],
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          Expanded(
                            child: TextFormField(
                              textAlign: TextAlign.start,
                              controller: _sobrenomeController,
                              keyboardType: TextInputType.text,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Sobrenome",
                                  labelStyle: TextStyle(color: Colors.white)),
                            ),
                          )
                        ],
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          Expanded(
                            child: TextFormField(
                              textAlign: TextAlign.start,
                              controller: _emailController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "E-mail",
                                  labelStyle: TextStyle(color: Colors.white)),
                            ),
                          )
                        ],
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          Expanded(
                            child: TextFormField(
                              textAlign: TextAlign.start,
                              controller: _confirmEmailController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Confirmar e-mail",
                                  labelStyle: TextStyle(color: Colors.white)),
                            ),
                          )
                        ],
                      ),
                      Column(
                        children: <Widget>[
                          const Padding(padding: EdgeInsets.only(top: 8)),
                          const Text("Data de nascimento:",
                              style: TextStyle(color: Colors.white)),
                          ElevatedButton(
                            onPressed: () async {
                              await showDatePicker(
                                context: context,
                                initialDate: date,
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
                      Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          Expanded(
                            child: TextFormField(
                              textAlign: TextAlign.start,
                              controller: _passwordController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Senha",
                                  labelStyle: TextStyle(color: Colors.white)),
                            ),
                          )
                        ],
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          Expanded(
                            child: TextFormField(
                              textAlign: TextAlign.start,
                              controller: _confirmPasswordController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Confirmar senha",
                                  labelStyle: TextStyle(color: Colors.white)),
                            ),
                          )
                        ],
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 32.0),
                        child: ElevatedButton(
                            onPressed: () {
                              if(_emailController.text.compareTo(_confirmEmailController.text)!= 0){
                                showDialog(
                                  context: context,
                                  builder: (BuildContext context) {
                                    return const AlertDialog(
                                      title: Text("Erro ao cadastrar"),
                                        content: Text(
                                            "Os e-mails não combinam"));
                                  },
                                );
                              }
                              else if(_passwordController.text.compareTo(_confirmPasswordController.text) !=0){
                                showDialog(
                                  context: context,
                                  builder: (BuildContext context) {
                                    return const AlertDialog(
                                      title: Text("Erro ao cadastrar"),
                                        content: Text(
                                            "As senhas não combinam"));
                                  },
                                );
                              }else{
                                UserService().register(
                                  context,
                                  date,
                                  _emailController,
                                  _nameController,
                                  _passwordController,
                                  _sobrenomeController);
                              }
                              
                            },
                            style: const ButtonStyle(
                              backgroundColor:
                                  MaterialStatePropertyAll(Color.fromARGB(255, 25, 53, 98)),
                              textStyle: MaterialStatePropertyAll(
                                  TextStyle(fontWeight: FontWeight.bold)),
                            ),
                            child: const Padding(
                              padding: EdgeInsets.only(
                                  left: 32.0,
                                  top: 16.0,
                                  right: 32.0,
                                  bottom: 16.0),
                              child: Text("CADASTRAR"),
                            )),
                      )
                    ],
                  ),
                ),
              ),
              SizedBox(
                width: 400,
                height: 100,
                child: Center(
                    child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    const Padding(
                      padding: EdgeInsets.only(right: 16.0),
                      child: Text("Já possui uma conta?"),
                    ),
                    ElevatedButton(
                        style: const ButtonStyle(
                          backgroundColor:
                              MaterialStatePropertyAll(Color.fromARGB(255, 25, 53, 98)),
                          textStyle: MaterialStatePropertyAll(
                              TextStyle(fontWeight: FontWeight.bold)),
                        ),
                        onPressed: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => LoginPage()));
                        },
                        child: const Text("Entrar"))
                  ],
                )),
              )
            ],
          ),
        ),
      ),
    );
  }
}
