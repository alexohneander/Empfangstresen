//database.js

import mongoose from "mongoose";

const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();

class Connection {
    constructor() {
        const url = process.env.MONGODB_URI || `mongodb://localhost:27017/empfangstresen`;

        logger.info(`Establish new connection with url ${url}`);

        mongoose.Promise = global.Promise;
        mongoose.connect(url);
    }
}

export default new Connection();