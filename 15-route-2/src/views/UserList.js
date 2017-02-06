var m = require("mithril")
var User = require("../model/User")

module.exports = {
    oninit: User.loadList,
    view: function(){
        return m(".user-list",User.list.map(function(u){
            return m("a.user-list-item.db",{href: "/edit/"+u.id, oncreate: m.route.link},u.firstName+" "+u.lastName)
        }))
    }
}