import { Router } from 'express';

// Controllers
import AlertController from './app/controllers/AlertController';

const routes = new Router();

routes.get('/alerts', AlertController.index);
routes.post('/alerts', AlertController.store);

export default routes;
