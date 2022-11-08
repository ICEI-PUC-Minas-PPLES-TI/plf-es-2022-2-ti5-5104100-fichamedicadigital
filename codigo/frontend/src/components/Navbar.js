import './Navbar.css'

import { NavLink, Link } from "react-router-dom";
import {
    BsHouseDoorFill,
    BsFillPersonFill,
    BsFillPersonBadgeFill,
    BsBoxArrowRight,
    BsFillCalendarFill,
    BsFillPieChartFill
} from "react-icons/bs";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout, reset } from "../slices/authSlice";

const NavBar = () => {
    const { auth,role } = useAuth();
    const { user } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());

        navigate("/login");
    };

    return (
        <nav id="nav">
            <Link to="/">
                <h2>Ficha Médica Digital</h2>
            </Link>
            <ul id="nav-links">
                {auth ? (
                    <>
                        <li>
                            <NavLink to="/">
                                <BsHouseDoorFill />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/medical">
                                <BsFillPersonBadgeFill />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/agenda">
                                <BsFillCalendarFill />
                            </NavLink>
                        </li>
                        {role == 'ROLE_ADMIN' &&
                            <li>
                            <NavLink to="/dashboard">
                                <BsFillPieChartFill />
                            </NavLink>
                        </li>
                        }
                        <li>
                            <NavLink to="/profile">
                                <BsFillPersonFill />
                            </NavLink>
                        </li>
                        <li>
                            <span className='btn-logout' onClick={handleLogout}><BsBoxArrowRight/></span>
                        </li>
                    </>
                ) : (
                    <>
                    <li>
                        <NavLink to="/login">Entrar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Cadastrar</NavLink>
                    </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar