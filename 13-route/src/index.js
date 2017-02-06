var m = require("mithril")
var UserList = require("./views/UserList")
var UserForm = require("./views/UserForm")

m.route(document.body,"/edit",{
    "/list": UserList,
    "/edit": UserForm,
})