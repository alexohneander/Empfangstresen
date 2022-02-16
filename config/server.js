// server.js

import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes";

const server = express();
const compression = require('compression')


server.use(bodyParser.json());
server.use(compression());

server.disable('x-powered-by');

setRoutes(server);

export default server;