import React from "react";
import auth from "./auth";
import PropTypes from "prop-types";
import axios from "axios";
import {setUsername} from './redux/actions/actions';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom';
import {Home} from './home.jsx'
import {Compose} from './Compose.jsx'
import {Lists} from './Lists.jsx'
 const name = ''

export  class App extends React.Component {
    
    
    static contextTypes = {
        router: PropTypes.object
    }
 

    componentWillMount(){
        this.loadUserData();
        this.props.setUsername('hello')
    }


    loadUserData(){
        axios
            .get('/api/users/i/', {
            headers: {
                "Authorization": localStorage.token
            }
        })
            .then(response => {
                const data = response
                console.log(response)
                this.props.setUsername(response.data.username)
            })
            .catch((error) => {
                console.log("Problem submitting New Post", error);
            })
    }
    render() {
        
        return (
            <Switch>
                <Route path="/app/home" component={Home} {...this.props} />
                <Route path="/app/compose" component={Compose} />
                <Route path="/APP/lists"  component={Lists}/>
            </Switch>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        username: state.info.username
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setUsername: (name) => {dispatch(setUsername(name) ); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
