module.exports = {
    
    getToken: function (username, pass, callback) {
        $.ajax({
            type: 'POST',
            url: '/api/obtain-auth-token/',
            data: {
                username: username,
                password: pass
            },
            success: function (res) {
                callback({authenticated: true, token: res.token})
            }
        })
    },
    
    login: function (username, pass, callback) {
        if (localStorage.token) {
            if (callback) {
                callback(true)
            }
            return
        }
        this.getToken(username, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
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