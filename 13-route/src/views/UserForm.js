var m = require("mithril")

UserForm = {
    view: function(){
        return m("form",[
            m("label.label","First Name"),
            m("input.input[type=text][placeholder=First Name]"),
            m("label.label","Last Name:"),
            m("input.input[placeholder=Last Name]"),
            m("button.f6.link.dim.br3.ph3.pv2.mb2.dib.white.bg-dark-green[type=submit]","save")
        ])
    }
}

module.exports = UserForm