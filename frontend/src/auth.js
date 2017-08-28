import axios from "axios";
//import cookies from "cookies";
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

let csrfToken = document.cookie.split("csrftoken=")[1]
console.log(csrfToken)

module.exports = {
    
    getToken: function (username, pass, callback) {
        axios.post('/api/obtain-auth-token/', {
                username: username,
                password: pass,
                headers: {"X-CSRFToken": csrfToken},
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
                localStorage.token = csrfToken
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