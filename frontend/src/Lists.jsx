import React, {Component} from 'react';
import axios from 'axios';
import auth from "./auth";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



export class Lists extends Component {
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
                <h1>View and edit lists</h1>

                <h1>VISUALIZE THE LISTS IN YOUR MIND</h1>
                <Link to="/app/home" className="btn btn-primary">Back</Link>
                <button className={'btn btn-danger'} onClick={this.logoutHandler}>Log out</button>
            </div>
        )
    }
}