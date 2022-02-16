// server.js

import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes";

const { createBullBoard } = require('bull-board')
const { BullAdapter } = require('bull-board/bullAdapter')
const jobQueue = require('./../src/queues/JobQueue');

const { router, setQueues, replaceQueues, addQueue, removeQueue } = createBullBoard([
    new BullAdapter(jobQueue),
]);

const server = express();
const compression = require('compression')

server.use(bodyParser.json());
server.use(compression());

server.disable('x-powered-by');

setRoutes(server);

// Additonal Admin route
server.use('/admin/queues', router)

export default server;