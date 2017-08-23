var ReactDOM = require('react-dom')
var Router = require('react-router')
import React from "react";
import auth from "./auth";
import App from "./App";
import Login from "./login";

// import css

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({ 
            pathname:'/app/login/',
            state: {nextPathname: '/app/'}
        })
    }
}

ReactDOM.render(
    <Router.Router>
        <Router.Route path='/app/login/' component={Login} />
        <Router.Route path='/app/' component={App} onEnter={requireAuth} />
    </Router.Router>,
    document.getElementById('app-page')    
)
