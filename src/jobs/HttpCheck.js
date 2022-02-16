//src/jobs/HttpCheck.js

import Job from './Job';
import Service from "./../models/Service";

const { flaschenpost } = require('flaschenpost');
const logger = flaschenpost.getLogger();


class HttpCheck extends Job {
    constructor(service) {
        super(service);
    }

    async runJob() {
        const { url } = "http://localhost:3000/status";

        return new Promise((resolve, reject) => {
            const request = require('request');
            request(url, (error, response, body) => {
                if (error) {
                    return reject(error);
                }

                if (response.statusCode !== 200) {
                    return reject(new Error(`${response.statusCode} ${response.statusMessage}`));
                }

                return resolve(body);
            });
        });
    }
}

export default new HttpCheck;