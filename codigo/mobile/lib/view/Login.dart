import 'package:flutter/material.dart';
import 'package:mobile/services/UserService.dart';
import 'package:mobile/view/Register.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  TextEditingController _emailController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purpleAccent,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.only(
              left: 32.0, top: 0.0, right: 32.0, bottom: 0.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                color: Colors.deepPurple,
                width: 400,
                height: 250,
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
                              controller: _emailController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "E-mail",
                                  labelStyle:
                                      const TextStyle(color: Colors.white)),
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
                              controller: _passwordController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Senha",
                                  labelStyle:
                                      const TextStyle(color: Colors.white)),
                            ),
                          )
                        ],
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 32.0),
                        child: ElevatedButton(
                            onPressed: () {
                              UserService().login(_emailController.text,
                                  _passwordController.text);
                            },
                            style: const ButtonStyle(
                              backgroundColor:
                                  MaterialStatePropertyAll(Colors.purple),
                              textStyle: MaterialStatePropertyAll(
                                  TextStyle(fontWeight: FontWeight.bold)),
                            ),
                            child: const Padding(
                              padding: EdgeInsets.only(
                                  left: 32.0,
                                  top: 16.0,
                                  right: 32.0,
                                  bottom: 16.0),
                              child: Text("ENTRAR"),
                            )),
                      )
                    ],
                  ),
                ),
              ),
              Container(
                width: 400,
                height: 100,
                child: Center(
                    child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: <Widget>[
                    const Padding(
                      padding: EdgeInsets.only(right: 16.0),
                      child: Text("Não tem uma conta?"),
                    ),
                    ElevatedButton(
                        style: const ButtonStyle(
                          backgroundColor:
                              MaterialStatePropertyAll(Colors.deepPurple),
                          textStyle: MaterialStatePropertyAll(
                              TextStyle(fontWeight: FontWeight.bold)),
                        ),
                        onPressed: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => RegisterPage()));
                        },
                        child: const Text("Cadastre-se"))
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
