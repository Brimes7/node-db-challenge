const express = require('express');


//Bringing in the routes
const projectRoute = require('./routers/projectRouter');
const resourceRoute = require('./routers/resourceRouter');
const taskRoute = require('./routers/taskRouter');

const server = express();
const PORT = 8000;

server.listen(PORT, err => {
    console.log(`listening on port ${PORT}`)
})