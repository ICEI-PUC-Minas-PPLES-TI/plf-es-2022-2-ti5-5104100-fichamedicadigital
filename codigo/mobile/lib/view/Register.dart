import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:mobile/services/UserService.dart';

import 'Login.dart';

class RegisterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purpleAccent,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.only(left: 32.0, top: 0.0, right: 32.0, bottom: 0.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                color: Colors.deepPurple,
                width: 400,
                height: 450,
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
                              // controller: _emailController,
                              keyboardType: TextInputType.text,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Nome",
                                  labelStyle: const TextStyle(
                                      color: Colors.white
                                  )
                              ),
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
                              // controller: _emailController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "E-mail",
                                  labelStyle: const TextStyle(
                                      color: Colors.white
                                  )
                              ),
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
                              // controller: _emailController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Confirmar e-mail",
                                  labelStyle: const TextStyle(
                                      color: Colors.white
                                  )
                              ),
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
                              // controller: _passwordController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Senha",
                                  labelStyle: const TextStyle(
                                      color: Colors.white
                                  )
                              ),
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
                              // controller: _passwordController,
                              keyboardType: TextInputType.emailAddress,
                              enabled: true,
                              decoration: const InputDecoration(
                                  labelText: "Confirmar senha",
                                  labelStyle: const TextStyle(
                                      color: Colors.white
                                  )
                              ),
                            ),
                          )
                        ],
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 32.0),
                        child: ElevatedButton(
                            onPressed: () {
                              UserService().register(context);
                            },
                            style: const ButtonStyle(
                              backgroundColor: MaterialStatePropertyAll(Colors.purple),
                              textStyle: MaterialStatePropertyAll(TextStyle(fontWeight: FontWeight.bold)),
                            ),
                            child: const Padding(
                              padding: EdgeInsets.only(left: 32.0, top: 16.0, right: 32.0, bottom: 16.0),
                              child: Text("CADASTRAR"),
                            )
                        ),
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
                      children: [
                        Padding(
                          padding: const EdgeInsets.only(right: 16.0),
                          child: const Text("Já possui uma conta?"),
                        ),
                        ElevatedButton(
                            style: const ButtonStyle(
                              backgroundColor: MaterialStatePropertyAll(Colors.deepPurple),
                              textStyle: MaterialStatePropertyAll(TextStyle(fontWeight: FontWeight.bold)),
                            ),
                            onPressed: () {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute(builder: (context) => LoginPage()));
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
