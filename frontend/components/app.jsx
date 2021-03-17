import React from 'react';
import SignupFromContainer from './session_form/signup_form_container';
import LoginFromContainer from './session_form/login_form_container';
// import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const App = () => (
    <div className="App">
        <Modal />
     <Switch>
         <Route exact path='/' component={LoginFromContainer} />
     </Switch>
    </div>
);

export default App;