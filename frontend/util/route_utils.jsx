import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route } from "react-router";
import {Redirect, withRouter } from "react-router-dom";

const mSTP = state => {
    // debugger
    return {loggedIn: Boolean(state.session.currentUser)}
}

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
         path={path}
        render={props => (
            loggedIn ? <Redirect to="/home" /> : <Component {...props} />
        )}
    />
)

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={ props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));