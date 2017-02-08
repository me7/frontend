var m = require("mithril")

User = {
    list: [],
    loadList: function(){
        return m.request({
            method: "GET",
            url:"http://rem-rest-api.herokuapp.com/api/users/",
            withCredentials: true
        })
        .then(function(result){
            User.list = result.data
        })
    },
    load: function(id){
        return m.request({
            method:"GET",
            url:"http://rem-rest-api.herokuapp.com/api/users/:id",
            data: {id: id},
            withCredentials: true
        })
        .then(function(result){
            User.current = result
        })
    },
    current: {},
    save: function(){
        return m.request({
            method:"PUT",
            url:"http://rem-rest-api.herokuapp.com/api/users/:id",
            withCredentials:true,
            data: User.current
        })
    }
}

module.exports = User