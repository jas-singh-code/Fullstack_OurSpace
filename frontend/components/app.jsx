import React from 'react';
import LoginFromContainer from './session_form/login_form_container';
// import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Modal from './modal/modal';
import { AuthRoute } from "../util/route_utils";
import PostIndexContainer from "../components/posts/post_index_container"

const App = () => (
    <div className="App">
        <Modal />
        <Switch>
            <AuthRoute exact path="/" component={LoginFromContainer} />
            <Route exact path="/home" component={PostIndexContainer} />
        </Switch>
    </div>
);

export default App;