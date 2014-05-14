'use strict';

/*
 * modules
 */
var app, bodyParser, express, http, methodOverride, morgan, newPage, options, path, routes;

http = require("http");

express = require("express");

http = require("http");

path = require("path");

morgan = require('morgan');

bodyParser = require('body-parser');

methodOverride = require('method-override');

routes = require(path.join(process.cwd(), "app/js/routes", "index.js"));

newPage = require("app/js/routes/newPage.js");

app = express();

options = {
  host: "localhost",
  port: 2323
};


/*
 * config
 */

app.set("port", process.env.PORT || 2323);

app.set("views", process.cwd() + "/app/views");

app.set("view engine", "jade");

app.use(morgan({
  format: 'dev',
  immediate: true
}));

app.use(bodyParser());

app.use(methodOverride());

app.use(require("stylus").middleware(path.join(process.cwd(), "/public")));

app.use(express["static"](path.join(process.cwd(), "/public")));


/*
 * routes
 */

app.get("/", routes.index);

app.get("/newPage", newPage.index);


/*
 * launching the server
 */

http.createServer(app).listen(app.get("port"), function(err) {
  console.log("server created");
  if (window.location.href.indexOf("localhost") < 0) {
    return window.location = "http://localhost:" + app.get("port");
  }
});
