var m = require("mithril")

Layout = {
    view: function(vnode){
        return m(".main.ma2.mw-100",[
            m("nav.menu.ma3",m("a[href='/list']",{oncreate: m.route.link},"Users")),
            m("section",vnode.children)
        ])
    }
}

module.exports =  Layout