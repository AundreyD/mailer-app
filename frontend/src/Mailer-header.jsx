import React, {Component} from 'react';
import axios from 'axios';
import auth from "./auth";
import { Link } from "react-router-dom";


export class Header extends Component {

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
                        <select placeholder="pick a group"></select>
                        <textarea placeholder='compose email'></textarea>
                        <input type="submit"/>
                    </div>
                </form>
                <button className={'btn btn-danger'} onClick={this.logoutHandler}>Log out</button>
            </div>
        )
    }
}