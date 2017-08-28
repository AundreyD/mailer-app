import React from "react";
import auth from "./auth";
import PropTypes from "prop-types";
import axios from "axios";
import {setUsername, addHomeValidation} from './redux/actions/actions';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link, Router, Switch} from 'react-router-dom';
import {Home} from './Home.jsx'
import {Login} from './Login.jsx'
import {Compose} from './Compose.jsx'
import {Lists} from './Lists.jsx'
const name = ''

export class App extends React.Component {

    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        this.loadUserData();
        this
            .props
            .setUsername('hello')
    }

    loadUserData() {
        axios
            .get('/api/users/i/', {
            headers: {
                "Authorization": localStorage.token
            }
        })
            .then(response => {
                const data = response
                this
                    .props
                    .setUsername(response.data.username)
            })
            .catch((error) => {
                console.log("Problem submitting New Post", error);
            })
    }
    render() {

        if (this.props.location.pathname == '/app/login') {
            if (!this.props.homeValidation) {
                this
                    .props
                    .addHomeValidation();
            }
        }

        if (!this.props.homeValidation && this.props.location.pathname !== '/app/login') {
            window.location = '/app/login';
        }

        return (
            <Switch>
                <Route
                    exact
                    path="/app/home"
                    render={() => <Home {...this.props}/>}
                    username={this.props.username}/>
                <Route
                    exact
                    path="/app/compose"
                    render={() => <Compose {...this.props}/>}
                    username={this.props.username}/>
                <Route
                    exact
                    path="/app/lists"
                    render={() => <Lists {...this.props}/>}
                    username={this.props.username}/>
                <Route
                    exact
                    path="/app/login"
                    render={() => <Login {...this.props}/>}
                    username={this.props.username}/>
            </Switch>
        );
    };
};

const mapStateToProps = (state) => {
    return {username: state.info.username, homeValidation: state.info.homeValidation}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (name) => {
            dispatch(setUsername(name));
        },

        addHomeValidation: () => {
            dispatch(addHomeValidation());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
