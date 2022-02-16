//src/controllers/ServiceController.js

import Controller from './Controller';
import RegisterService from "./../services/RegisterService";
import Service from "./../models/Service";

const registerService = new RegisterService(
    new Service().getInstance()
);

class ServiceController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new ServiceController(registerService);