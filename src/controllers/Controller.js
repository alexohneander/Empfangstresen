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
        let response = await this.service.getAll(req.query);
        logger.info('Controller: Getting all', { controller: this.constructor.name, service: this.service.constructor.name, method: 'getAll', responseCount: response.total });

        return res.status(200).send(response);
    }

    async insert(req, res) {
        let response = await this.service.insert(req.body);

        if (response.error) {
            logger.error('Controller: Insert', { controller: this.constructor.name, service: this.service.constructor.name, method: 'Insert', error: response.error });
            return res.status(response.statusCode).send(response);
        }

        logger.info('Controller: Insert', { controller: this.constructor.name, service: this.service.constructor.name, method: 'Insert', requestBody: req.body });
        return res.status(201).send(response);
    }

    async update(req, res) {
        const { id } = req.params;

        let response = await this.service.update(id, req.body);
        logger.info('Controller: Update', { controller: this.constructor.name, service: this.service.constructor.name, method: 'Update', requestParams: req.params });

        return res.status(response.statusCode).send(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        let response = await this.service.delete(id);
        logger.info('Controller: Delete', { controller: this.constructor.name, service: this.service.constructor.name, method: 'Delete', requestParams: req.params });

        return res.status(response.statusCode).send(response);
    }

}

export default Controller;