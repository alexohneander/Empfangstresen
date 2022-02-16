// src/queues/DistributeAdvert.js

const Queue = require('bull');
const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();

const checkHttp = require('../jobs/HttpCheck');
const checkTcp = require('../jobs/TcpCheck');
const redisUrl = require('../../config/queue');


const jobQueue = new Queue('JobWorker', redisUrl);

jobQueue.process(async job => {
    const service = job.data;

    logger.info('Running job', { service: service });

    try {
        switch (service.type) {
            case 'http':
                {
                    logger.info('HTTP check');
                    const response = await checkHttp.execute(service);
                    return Promise.resolve({ done: true, type });
                }
            case 'tcp':
                {
                    const response = await checkTcp(job);
                    return Promise.resolve({ done: true, type });
                }
            default:
                {
                    logger.info('default check');
                    return Promise.resolve({ done: true, type });
                }
        }
    } catch (err) {
        return Promise.reject(err);
    }
});

module.exports = jobQueue;