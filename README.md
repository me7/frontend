# frontend
front end dev stuff

mithril.js learning repo
start on Feb 1, 2017 

## plan
* setup with webpack 
* hello world [01-04](http://mithril.js.org/installation.html)
* introduction [05-??](http://mithril.js.org/index.html)
* exam 1: 10*10 tile grid with green or red background (pass/fail) which random update every second (1-5 tile). each updated tile have glow effect
* todo mvc
* a few more
* threadit.js

  Then start real project. real time WIP dashboard

Note:
* mithril.min.js and node_modules just move around each folder, please copy back

### 01 plain js
* run using minimum requirement. Just 1 html and 1 javascript file
* need to include mithril.min.js before call m.render
* m.render(document.body, "hello world") mean render hello world to document body

### 02 run using webpack
* `npm install -g webpack` to install webpack (so you can compile your js)
* create index.js and index.html
* notice that <script src="app.js"></script> cannot put on header because you call m.render on document.body if you put on header it's will not have body yet at that time (Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.)
* `webpack index.js app.js -p` (-p for minified production mode) will error because you `require("mithril")` but not have it yet (Module not found: Error: Can't resolve 'mithril' in...)
* `npm install mithril` then compile again
* you can add this command in "scripts" section of package.json (see link of installation)

### 03 component
* you can create component in separate file and use `module.exports = {}`
* inside exports. minimum requirement for component is view `view: function(){return "hello from module"}`
* use m.mount instead of m.render for component, so it's can auto-redraw

### 04 live reload *NOT WORK ON WINDOWS AS I TRY IT*
* `npm install budo -g` to install budo live reload
* `webpack index.js app.js -p && bodu --live --open index.js` is manual command to run
* can do `npm init --yes` then add this script to "scripts" section of package.json (see source code)

### 05 DOM elements
* such as H1,H2,H3,P ....
* m("h1","text") to create h1. e.g. m.render(document.body, m("h1","hello"))
* can add attribute inside {} `m("h1",{class:"title"},"title text")
* can put multiple element in array `[m("h1","first"),m("button","second")]

### 06 component and 07 component event
* component is just object that have view function {view: function(){return "v"}}
* can specify event (e.g. onclick) by provide object to 2nd parameter m("button",{onclick:xxxx},"text")
* to combine object? (like combine btHello and btCount) use m("",[m(btHello),m(btCount)])

### 08 routing
* use m.route(div,default,{routes list}) -- see example in code

### 09 [xhr = talk to server](http://stackoverflow.com/questions/4657287/what-is-the-difference-between-xmlhttprequest-jquery-ajax-jquery-post-jquery)
* use [REM](http://rem-rest-api.herokuapp.com/) as a server
* use m.request({})
* parameter of {object} -> method, url, data, ... [see more](http://mithril.js.org/request.html)
* it's return [Promise](http://mithril.js.org/promise.html) so you can use .then .catch .all
* #WHY always get "Item not found" when query (nothing in cookie)