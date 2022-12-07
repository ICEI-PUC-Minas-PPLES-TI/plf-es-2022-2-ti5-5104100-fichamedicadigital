import {render,screen,cleanup, getAllByTestId} from '@testing-library/react'
import Profile from '../pages/Profile/Profile'
import Home from '../pages/Home/Home'
import FichaMedica from '../pages/MedicalRecord/MedicalRecord'
import Consulta from '../pages/Consultas/Consultas'
import Dashboard from '../pages/Admin/Dashboard'

import App from '../App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Testando aplicação', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('Passou no teste', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(getByText('Login')).not.toBeNull();
    });
});

describe('Testando perfil', () => {
    const initialState = { user: { nome: 'Teste',email: 'teste@gmail.com',dataNascimento:'"2022-10-20T00:00:00.000+00:00'}};
    const mockStore = configureStore();
    let store;

    it('Passou no teste', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <Profile />
            </Provider>
        );
        expect(getByText('Perfil')).not.toBeNull();
    });
});

describe('Testando Ficha Médica', () => {
    const initialState = { };
    const mockStore = configureStore();
    let store;

    it('Passou no teste', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <FichaMedica />
            </Provider>
        );
        expect(getByText('Ficha Médica')).not.toBeNull();
    });
});

describe('Testando consultas', () => {
    const initialState = { };
    const mockStore = configureStore();
    let store;

    it('Passou no teste', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <Consulta/>
            </Provider>
        );
        expect(getByText('Consultas')).not.toBeNull();
    });
});

describe('Testando dashboard', () => {
    const initialState = { user: { nome: 'Teste',email: 'teste@gmail.com',dataNascimento:'"2022-10-20T00:00:00.000+00:00'}};
    const mockStore = configureStore();
    let store;

    it('Passou no teste', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );
        expect(getByText('Gerenciar')).not.toBeNull();
    });
});

describe('Testando home', () => {
    const initialState = {};
    const mockStore = configureStore();
    let store;

    it('Passou no teste', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(getByText('Bem vindo')).not.toBeNull();
    });
});