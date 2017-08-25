import React, {Component} from 'react';
import axios from 'axios';
import auth from "./auth";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Home extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillUpdate(nextprops){
        if(this.props.hasOwnProperty('username')){
            return this.props.username.data.username
        }else{
            return 'fix later'
        }
    }

    logoutHandler = () => {
        auth.logout();
        this
            .context
            .router
            .history
            .push('/app/login/');
    }

    renderUsername(){
        if(this.props.hasOwnProperty('username')){
            return this.props.username.data.username
        }else{
            return 'fix later'
        }
    }

    render(){
        let username = this.props.username
        return(
            
            <div>
                <h1>You are now logged in {username}</h1>
                <Link to='/app/lists'className={'btn btn-primary'}>View or Edit Lists</Link>
                <Link to='/app/compose' className={'btn btn-primary'}>Compose and Send Email</Link>
                <Link to='/app/login' className={'btn btn-danger'} onClick={this.logoutHandler}>Log out</Link>
            </div>
        )
    }
}