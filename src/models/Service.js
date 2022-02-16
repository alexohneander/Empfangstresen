//src/models/Service.js
import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const jobQueue = require('./../queues/JobQueue');

class Service {

    initSchema() {
        const schema = new Schema({
            title: {
                type: String,
                required: true,
            },
            namespace: {
                type: String,
                required: true,
            },
            version: String,
            public: Boolean,
            interval: Number,
            type: String,
            status: String,
            health: String,
        }, { timestamps: true });
        schema.pre(
            "save",
            function(next) {
                let service = this;

                jobQueue.add(service, { repeat: { cron: '* * * * *' } });

                return next();
            },
            function(err) {
                next(err);
            }
        );
        schema.plugin(uniqueValidator);
        mongoose.model("services", schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model("services");
    }
}

export default Service;