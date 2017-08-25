import React from "react";
import auth from "./auth";
import App from "./App.jsx";
import Login from "./Login.jsx";
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom';
import axios from 'axios';
const history = createBrowserHistory();
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/index";
import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(reduxImmutableStateInvariant()));

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
    <div className ="provider-area">
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path='/app/' component={App} onEnter={requireAuth} />
                </Switch>
            </Router>
        </Provider>
    </div>,
    document.getElementById('app-page')
)



contextTypes: {
    router: React.PropTypes.object.isRequired
}
