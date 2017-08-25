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
                console.log(response)
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
            console.log("wtf")
            if (!this.props.homeValidation) {
                this
                    .props
                    .addHomeValidation();
                    console.log("THIS")
            }
        }

        if (!this.props.homeValidation 
            && this.props.location.pathname !== '/app/login') {
                console.log("one more")
            window.location = '/app/login';
        }

        return (
            <Switch>
                <Route path="/app/home" component={Home} {...this.props} />
                <Route path="/app/compose" component={Compose} />
                <Route path="/app/lists" component={Lists} />
                <Route path='/app/login' component={Login} />
            </Switch>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        username: state.info.username, 
        homeValidation: state.info.homeValidation
    }
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
