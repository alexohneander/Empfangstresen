// src/queues/DistributeAdvert.js
import CheckHttp from "./../jobs/HttpCheck";

const Queue = require('bull');
const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();

const redisUrl = require('../../config/queue');


const jobQueue = new Queue('JobQueue', redisUrl);

jobQueue.process(async job => {
    const service = job.data.service;

    logger.info('Running job', { service: service });

    try {
        switch (service.type) {
            case 'http':
                {
                    const httpJob = new CheckHttp(service);
                    const response = await httpJob.execute(service);

                    return Promise.resolve({ res: response });
                }
            case 'tcp':
                {
                    const response = await checkTcp(job);
                    return Promise.resolve({ done: true, response });
                }
            default:
                {
                    return Promise.resolve({ done: true });
                }
        }
    } catch (err) {
        return Promise.reject(err);
    }
});

module.exports = jobQueue;