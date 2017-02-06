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
    }
}

module.exports = User