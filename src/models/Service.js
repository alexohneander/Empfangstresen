//src/models/Service.js
import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

class Service {

    initSchema() {
        const schema = new Schema({
            title: {
                type: String,
                required: true,
            },
            slug: String,
            subtitle: {
                type: String,
                required: false,
            },
            description: {
                type: String,
                required: false,
            },
            content: {
                type: String,
                required: true,
            }
        }, { timestamps: true });
        schema.pre(
            "save",
            function(next) {
                let service = this;
                if (!service.isModified("title")) {
                    return next();
                }
                service.slug = slugify(service.title, "_");
                console.log('set slug', service.slug);
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