import React from "react";
import auth from "./auth";
import PropTypes from "prop-types";

export default class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    static contextTypes = {
        router: PropTypes.object
    }

    handleSubmit = (e) => {
        e.preventDefault()

        var username = this.refs.username.value
        var pass = this.refs.pass.value
        auth.login(username, pass, (loggedIn) => {
            if (loggedIn) {
                this
                    .context
                    .router
                    .history
                    .push('/app')
            }
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="username" ref="username"/>
                <input type="password" placeholder="password" ref="pass"/>
                <input type="submit"/>
            </form>
        )
    }
};