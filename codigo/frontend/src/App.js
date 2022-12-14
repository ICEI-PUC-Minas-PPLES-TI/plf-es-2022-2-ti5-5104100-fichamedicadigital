import './App.css';

import { useAuth } from "./hooks/useAuth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mensageria from './components/Message'

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Profile from './pages/Profile/Profile';
import MedicalRecord from './pages/MedicalRecord/MedicalRecord';
import Agenda from './pages/Agenda/Agenda';
import Consultas from './pages/Consultas/Consultas';
import Dashboard from './pages/Admin/Dashboard';

function App() {
    const { auth, loading,role } = useAuth();
    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={!auth && 'app'}>

            <BrowserRouter>
                {auth && (
                    <Navbar />
                )}
                {auth && <Mensageria/> }
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={auth ? <Home /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/medical"
                            element={auth && role == 'ROLE_MEDICO' || role == 'ROLE_ADMIN' ? <MedicalRecord /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/consultas"
                            element={auth && role == 'ROLE_MEDICO' || role == 'ROLE_ADMIN' ? <Consultas /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/profile"
                            element={auth ? <Profile /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/agenda"
                            element={auth && role == 'ROLE_MEDICO' || role == 'ROLE_ADMIN' ? <Agenda /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/dashboard"
                            element={auth && role == 'ROLE_ADMIN' ? <Dashboard /> : auth  ? <Home /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="login"
                            element={!auth ? <Login /> : <Navigate to="/" />}
                        />
                        <Route
                            path="register"
                            element={!auth ? <Register /> : <Navigate to="/" />}
                        />
                    </Routes>
                </div>
                {auth && 
                    <Footer />
                }
            </BrowserRouter>
        </div>
    );
}

export default App;
