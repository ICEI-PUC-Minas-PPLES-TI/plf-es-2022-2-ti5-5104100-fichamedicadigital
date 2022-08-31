import React, { Component } from "react";
import Main from "../../template/Main/Main";

const headerProps = {
    icon: 'users',
    title: 'Gerenciamento de Usuários',
    subtitle: 'Painel Administrador'
}

export default class UserCrud extends Component {

    
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderTable()}
            </Main>
        )
    }
}