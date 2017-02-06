var m = require("mithril")
var User = require("../model/User")

UserForm = {
    oninit: function(vnode){
        User.load(vnode.attrs.id)
    },
    view: function(){
        return m("form",[
            m("label.label","First Name"),
            m("input.input[type=text][placeholder=First Name]",{value: User.current.firstName}),
            m("label.label","Last Name:"),
            m("input.input[placeholder=Last Name]",{value: User.current.lastName}),
            m("button.f6.link.dim.br3.ph3.pv2.mb2.dib.white.bg-dark-green[type=submit]","save")
        ])
    }
}

module.exports = UserForm