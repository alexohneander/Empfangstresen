//config/routes.js
import ServiceController from './../src/controllers/ServiceController';

export default (server) => {

    // SERVICE ROUTES
    server.get(`/api/service`, ServiceController.getAll);
    server.post(`/api/service`, ServiceController.insert)
    server.put(`/api/service/:id`, ServiceController.update);
    server.delete(`/api/service/:id`, ServiceController.delete);

}