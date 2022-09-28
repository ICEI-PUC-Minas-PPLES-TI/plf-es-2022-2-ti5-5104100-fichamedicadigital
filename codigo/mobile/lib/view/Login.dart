import 'package:flutter/material.dart';

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
        child: Container(
          color: Colors.deepPurple,
          width: 400,
          height: 200,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
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
                        controller: _passwordController,
                        keyboardType: TextInputType.emailAddress,
                        enabled: true,
                        decoration: const InputDecoration(
                          labelText: "Senha"
                        ),
                      ),
                    )
                  ],
                ),
                ElevatedButton(
                  onPressed: () {
                    // not implemented yet
                  },
                    style: const ButtonStyle(
                      backgroundColor: MaterialStatePropertyAll(Colors.purple),
                      textStyle: MaterialStatePropertyAll(TextStyle(fontWeight: FontWeight.bold)),
                    ),
                  child: const Padding(
                    padding: EdgeInsets.only(left: 32.0, top: 16.0, right: 32.0, bottom: 16.0),
                    child: Text("ENTRAR"),
                  )
              )
              ],
            ),
          ),
        ),
      ),
    );
  }
}