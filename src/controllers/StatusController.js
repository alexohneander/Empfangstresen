//src/controllers/StatusController.js

const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();

class StatusController {
    constructor() {
        this.get = this.get.bind(this);
    }

    async get(req, res) {
        logger.info('Controller: Get Status', { controller: this.constructor.name, method: 'get' });
        return res.status(200).send({ status: 'ok' });
    }
}

export default new StatusController;