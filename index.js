const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;

const server = express() // create an express server



server.use(express.static(path.join(__dirname, "public"))); // declare a directory for all the static files

server.set("views", path.join(__dirname, "views")); // declare a directory for all the template files

server.set("view engine", "ejs"); // declare a template engine for converting the templates to html for the browser to parse

// register routes

server.get("/", (req, res) => res.render("pages/home")); // register the home route to point to the index.ejs template
server.get("/courses", (req, res) => res.render("pages/courses")) // register the contacts routes to point to the contacts.ejs template
server.get("/learning", (req, res) => res.render("pages/learning")) // register the about routes to point to the about.ejs 
server.get("/pricing", (req, res) => res.render("pages/pricing")) // register the about routes to point to the about.ejs 
server.get("/login", (req, res) => res.render("pages/login")) // register the about routes to point to the about.ejs 
server.get("/join-now", (req, res) => res.render("pages/join-now")) // register the about routes to point to the about.ejs 
server.get("/zoom", (req, res) => res.render("pages/zoom")) // register the about routes to point to the about.ejs 


server.listen(PORT, () => console.log(`Listening on ${PORT}`));

