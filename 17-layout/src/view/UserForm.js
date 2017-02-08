var m = require("mithril")
var User = require("../model/User")

UserForm = {
    oninit:function(vnode){User.load(vnode.attrs.id)},
    view: function(){
        //return m("h1", JSON.stringify(User.current))
        return m("form",[
            m("label.db.pt3","First Name"),
            m("input.db[type=text][placeholder=First Name]",
                {value: User.current.firstName,
                oninput: m.withAttr("value",function(v){User.current.firstName = v})}),
            m("label.db.pt3","Last Name"),
            m("input.db[type=text][placeholder=Last Name]", 
                {value: User.current.lastName,
                oninput: m.withAttr("value",function(v){User.current.lastName = v})}),
            m("button.ib.mt3.pa2.f4.pointer.bg-dark-green.white.dim.br3[type=submit]",
                {onclick:User.save},"save"),
        ])
    }
}

module.exports = UserForm