import React from "react";
import auth from "./auth";
import App from "./App";
import Login from "./login";
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import axios from'axios'
const history = createBrowserHistory()
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom'


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
    <Router history={history}>
        <Switch>
            <Route path='/app/login/' component={Login} />
            <Route path='/app/' component={App} onEnter={requireAuth} />
        </Switch>
    </Router>,
    document.getElementById('app-page')    
)
