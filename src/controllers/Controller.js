//src/controllers/Controller.js

const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();

class Controller {

    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req, res) {
        logger.info('Controller: Getting all', { controller: this.constructor.name, service: this.service.constructor.name, method: 'getAll' });
        return res.status(200).send(await this.service.getAll(req.query));
    }

    async insert(req, res) {
        let response = await this.service.insert(req.body);

        if (response.error) {
            logger.error('Controller: Insert', { controller: this.constructor.name, service: this.service.constructor.name, method: 'Insert' });
            return res.status(response.statusCode).send(response);
        }

        logger.info('Controller: Insert', { controller: this.constructor.name, service: this.service.constructor.name, method: 'Insert' });
        return res.status(201).send(response);
    }

    async update(req, res) {
        const { id } = req.params;

        let response = await this.service.update(id, req.body);

        return res.status(response.statusCode).send(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        let response = await this.service.delete(id);

        return res.status(response.statusCode).send(response);
    }

}

export default Controller;