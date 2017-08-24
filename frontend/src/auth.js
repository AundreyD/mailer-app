import axios from "axios";

module.exports = {
    
    getToken: function (username, pass, callback) {
        axios.post('/api/obtain-auth-token/', {
                username: username,
                password: pass
        }).then(function (response) {
            callback({authenticated: true, token: response.token})
        }).catch((error) => {
            console.log("Problem submitting New Post", error);
        })
    },
    login: function (username, pass, callback) {
        if (localStorage.token) {
            if (callback) {
                callback(true)
            }
            return
        } 
        this.getToken(username, pass, (response) => {
            console.log(response)
            if (response.authenticated) {
                localStorage.token = response.token
                if (callback) {
                    callback(true)
                }
            } else {
                if (callback) {
                    callback(false)
                }
            }
        });
    },
    
    logout: function () {
        delete localStorage.token
    },

    loggedIn: function () {
        return !!localStorage.token
    },
}