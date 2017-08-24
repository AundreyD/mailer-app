import React from "react";
import auth from "./auth";
import PropTypes from "prop-types";
import axios from "axios";

export default class App extends React.Component {

    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: {}
        };
    }

    componentWillMount = () => {
        this.loadUserData();
    }

    logoutHandler = () => {
        auth.logout();
        this
            .context
            .router
            .history
            .push('/app/login/');
    }

    loadUserData = () => {
        axios
            .get('/api/users/i/', {
            responseType: 'json',
            headers: {
                "Authorization": localStorage.token
            }
        })
            .then(response => {
                this.setState({user: response})
            })
            .catch((error) => {
                console.log("Problem submitting New Post", error);
            })
    }
    render() {
        {this.state}
        return (
            <div>
                <h1>You are now logged in bro</h1>
                <button onClick={this.logoutHandler}>Log out</button>
            </div>
        );
    };
};