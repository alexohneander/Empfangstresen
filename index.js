// index.js

import './config/database';
import server from './config/server';

const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    logger.info(`Service running on port ${PORT}`);
});