const express = require('express');
const helmet = require("helmet");

const projectsRouter = require("../Router/projectRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectsRouter);

server.get('/', (req, res) => {
    res.send("You might actually pass Back-end, keep testing!!");
})

module.exports = server;