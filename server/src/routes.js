import { Router } from 'express';

// Controllers
import AlertController from './app/controllers/AlertController';

// Middlewares
import addUserEmail from './app/middlewares/addUserEmail';

const routes = new Router();


routes.post('/alerts', AlertController.store);

routes.use(addUserEmail);
routes.get('/alerts', AlertController.index);
routes.put('/alerts/:alertId', AlertController.update);
routes.delete('/alerts/:alertId', AlertController.delete);

export default routes;
