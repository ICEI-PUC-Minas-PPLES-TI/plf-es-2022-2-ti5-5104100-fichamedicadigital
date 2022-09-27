import React from "react";
import {Routes, Route ,Navigate} from 'react-router-dom'

import Home from "../components/views/Home/Home";
import UserCrud from "../components/views/UserCrud/UserCrud";
import DashBoard from "../components/views/DashBoard/DashBoard";

export default props => 
        <Routes>
            <Route exact path='/home' element={<Home/>}/>
            <Route path='/users' element={<UserCrud/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
            {/* <Navigate from='*' to='/home'/> */}
        </Routes>

