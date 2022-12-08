import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {render,screen,cleanup, getAllByTestId} from '@testing-library/react'

import App from './App';
import Dashboard from './pages/Admin/Dashboard';
import Profile from './pages/Profile/Profile';
import Agenda from './pages/Agenda/Agenda';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import MedicalRecord from './pages/MedicalRecord/MedicalRecord';
import Home from './pages/Home/Home';

import {store} from './store';


describe('Testando App container', () => {
   
    it('O componente deve ser renderizado e carregar os campos de Login e Entrar', () => {
        render(
            <Provider store={store}>
                    <App />
            </Provider>
        );
        expect(screen.getByText('Entrar')).not.toBeNull;
        expect(screen.getByText('Login')).not.toBeNull;
    });
});

describe('Testando Dashboard container', () => {
   
    it('O componente Dashboard deve ser renderizado', () => {
        render(
            <Provider store={store}>
                    <Dashboard />
            </Provider>
        );
        expect(screen.getByText('Nome')).not.toBeNull;
    });

});

describe('Testando Medical Record container', () => {
   
    it('O componente da Ficha Médica deve ser renderizado', () => {
        render(
            <Provider store={store}>
                    <MemoryRouter>
                        <MedicalRecord />
                    </MemoryRouter>
            </Provider>
        );
        expect(screen.findAllByLabelText('Email:')).not.toBeNull;
        expect(screen.findAllByLabelText('Nome:')).not.toBeNull;
        expect(screen.findAllByLabelText('Sobrenome:')).not.toBeNull;
        expect(screen.findAllByLabelText('Data:')).not.toBeNull;
        expect(screen.findAllByLabelText('Cardíaco:')).not.toBeNull;
        expect(screen.findAllByLabelText('Internado:')).not.toBeNull;
        expect(screen.findAllByLabelText('Desmaio:')).not.toBeNull;
        expect(screen.findAllByLabelText('Diabético:')).not.toBeNull;
        expect(screen.findAllByLabelText('Transfusão:')).not.toBeNull;
        expect(screen.findAllByLabelText('Lactose:')).not.toBeNull;
        expect(screen.findAllByLabelText('SUS:')).not.toBeNull;

    });

});

// describe('Testando Profile container', () => {
   
//     it('O componente Profile deve ser renderizado', () => {
//         render(
//             <Provider store={store}>
//                     <Profile />
//             </Provider>
//         );
//         expect(screen.getByText('Nome')).not.toBeNull;
//     });

// });


describe('Testando Agenda container', () => {
   
    it('O componente Agenda deve ser renderizado', () => {
        render(
            <Provider store={store}>
                    <Agenda />
            </Provider>
        );
        expect(screen.getByText('Calendário')).not.toBeNull;
    });

});

describe('Testando Home container', () => {
   
    it('O componente Home deve ser renderizado', () => {
        render(
            <Provider store={store}>
                    <Home />
            </Provider>
        );
        expect(screen.getByText('Bem Vindo')).not.toBeNull;
    });

});
