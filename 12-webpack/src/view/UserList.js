var m = require("mithril")
var User = require("../model/User")

module.exports = {
    oninit: User.loadList,
    view: function(){
        return m(".user-list",User.list.map(function(u){
            return m(".user-list-item",u.firstName+" "+u.lastName)
        }))
    }
}