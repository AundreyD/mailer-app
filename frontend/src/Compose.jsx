import React, {Component} from 'react';
import axios from 'axios';
import auth from "./auth";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



export class Compose extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    logoutHandler = () => {
        auth.logout();
        this
            .context
            .router
            .history
            .push('/app/login/');
    }

    render(){
        return(
            
            <div>
                <h1>Send an email</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className={'form-group'}>
                        <select className='form-control' placeholder="pick a group"></select>
                        <textarea className='form-control' placeholder='compose email'></textarea>
                        <input className='btn' type="submit"/>
                    </div>
                </form>
                <button className={'btn btn-danger'} onClick={this.logoutHandler}>Log out</button>
            </div>
        )
    }
}