import React from "react";
import auth from "./auth";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {

    getInitialState = () => {
        return {'user': []};
    }

    componentDidMount = () => {
        this.loadUserData();
    }

    logoutHandler = () => {
        auth.logout();
        this
            .context
            .router
            .replace('/app/login/');
    }

    loadUserData = () => {
        axios
            .get('/api/users/i/', {
                responseType: 'json',
                headers: {
                    'Authorization': 'Token ' + localStorage.token
                }
            })
            .then(function (response) {
                this.setState({user: response})
            }.bind(this))
    }
    render() {
        return (
            <div>
                <h1>You are now logged in, {this.state.user.username}</h1>
                <button onClick={this.logoutHandler}>Log out</button>
            </div>
        );
    };
};

contextTypes : {
    router: React.PropTypes.object.isRequired
}

// NOT SURE ABOUT SYNTAX FOR AXIOS CALL