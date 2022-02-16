//config/routes.js
import ServiceController from './../src/controllers/ServiceController';
import StatusController from './../src/controllers/StatusController';

export default (server) => {

    // SERVICE ROUTES
    server.get(`/api/service`, ServiceController.getAll);
    server.post(`/api/service`, ServiceController.insert);
    server.put(`/api/service/:id`, ServiceController.update);
    server.delete(`/api/service/:id`, ServiceController.delete);

    // STATUS ROUTES
    server.get(`/status`, StatusController.get);
}