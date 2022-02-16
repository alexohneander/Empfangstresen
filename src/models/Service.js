//src/models/Service.js
import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

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
        }, { timestamps: true });
        schema.pre(
            "save",
            function(next) {
                let service = this;
                if (!service.isModified("title")) {
                    return next();
                }

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