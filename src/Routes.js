import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from './user/Signin'
import AddJob from './job/AddJob'
import Home from './core/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/addJob" exact component={AddJob}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

