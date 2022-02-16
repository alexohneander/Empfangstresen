//src/jobs/Job.js

const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();

class Job {
    constructor(service) {
        this.service = service;
        this.job = this;
        this.execute = this.execute.bind(this);
    }

    async execute() {
        let response = await this.job.runJob();
        logger.info(`${this.constructor.name}: Job Done`, { job: this.constructor.name, service: this.service.constructor.name, method: 'execute' });
    }
}

export default Job;