import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthentcated } from './index'

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => isAuthentcated() && isAuthentcated().user.role === 1 ? (
        <Component {...props} />
    ) : (
        <Redirect to={{pathname: '/signin', state: {from: props.location} }} />
    )} />
)

export default AdminRoute