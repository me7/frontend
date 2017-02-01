# frontend
front end dev stuff

mithril.js learning repo
start on Feb 1, 2017 

## plan
* setup with webpack (http://mithril.js.org/installation.html)
* hello world
* todo mvc
* a few more
* threadit.js

  Then start real project. real time WIP dashboard

### 01 plain js
* run using minimum requirement. Just 1 html and 1 javascript file
* need to include mithril.min.js before call m.render
* m.render(document.body, "hello world") meand render hello world to document body

### 02 run using webpack
* `npm install -g webpack` to install webpack (so you can compile your js)
* create index.js and index.html
* notice that <script src="app.js"></script> cannot put on header because you call m.render on document.body if you put on header it's will not have body yet at that time (Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.)
* `webpack index.js app.js -p` (-p for minified production mode) will error because you `require("mithril")` but not have it yet (Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.)
* `npm install mithril` then compile again
* you can add this command in "scripts" section of package.json (see link of installation)