var m = require("mithril")

var User = {
    list: [],
    loadList: function(){
        //User.list = [{"firstName":"John", "lastName":"Doe"},{"firstName":"Marry","lastName":"Me"}]
        return m.request({
            method: "GET",
            url: "http://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true
        })
        .then(function(result){
            User.list = result.data
        })
    },
    current: {},
    load: function(id){
        m.request({
            method: "GET",
            url: "http://rem-rest-api.herokuapp.com/api/users/:id",
            data: {id: id},
            withCredentials: true,
        })
        .then(function(result){
            User.current = result
        })
    },
    save: function() {
        return m.request({
            method: "PUT",
            url: "http://rem-rest-api.herokuapp.com/api/users/:id",
            data: User.current,
            withCredentials: true,
        })
        .then(function(result){
            console.log(result)
        })
    }
}

module.exports = User