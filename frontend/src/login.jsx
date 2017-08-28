import React from "react";
import auth from "./auth";
import PropTypes from "prop-types";

export class Login extends React.Component {
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
                    .push('/app/home')
            }
        });
    }

    render() {
        return (
            <form className='form-group' onSubmit={this.handleSubmit}>
                <input className='form-control' type="text" placeholder="username" ref="username"/>
                <input className='form-control' type="password" placeholder="password" ref="pass"/>
                <input className='btn' type="submit"/>
            </form>
        )
    }
};
