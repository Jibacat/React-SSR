import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../client/component/home';
import Name from '../client/component/name'

export default (
    <div>
        <Route path='/' exact={true} component={Home}></Route>
        <Route path='/name' exact={true} component={Name}></Route>
    </div>
)