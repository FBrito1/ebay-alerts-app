import { Router } from 'express';

// Controllers
import AlertController from './app/controllers/AlertController';

const routes = new Router();

routes.get('/', AlertController.index);

export default routes;
