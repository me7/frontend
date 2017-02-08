var m = require("mithril")
var UserList = require("./view/UserList")
var UserForm = require("./view/UserForm")
var Layout = require("./view/Layout")

m.route(document.body,"/list",{
    "/list": {
        render: function(){
            return m(Layout,m(UserList))
        }
    },
    "/edit/:id" : {
        render: function(vnode){
            return m(Layout,m(UserForm, vnode.attrs))
        }}
})