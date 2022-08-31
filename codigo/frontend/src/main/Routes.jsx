import React from "react";
import {Switch, Route, Redirect} from 'react-router'

import Home from "../components/views/Home/Home";
import UserCrud from "../components/views/UserCrud/UserCrud";
import DashBoard from "../components/views/DashBoard/DashBoard";

export default props => 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCrud}/>
        <Route path='/dashboard' component={DashBoard}/>
        <Redirect from='*' to='/'/>
    </Switch>
