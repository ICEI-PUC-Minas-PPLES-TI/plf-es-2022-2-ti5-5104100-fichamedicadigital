import React from "react";
import {Routes, Route ,Navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import Home from "../components/views/Home/Home";
import UserCrud from "../components/views/UserCrud/UserCrud";
import DashBoard from "../components/views/DashBoard/DashBoard";



const Rotas = () => {
       
    
    return (
        <Routes>
            <Route exact path='/home' element={<Home/>}/>
            <Route path='/users' element={<UserCrud/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
            {/* <Route path="*" element={<Navigate to="/home" replace />}/>     */}
        </Routes>
        )
        
}
export default Rotas
        

