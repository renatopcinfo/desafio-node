import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SearchContoller from './app/controllers/SearchController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/signup', UserController.store);

routes.post('/signin', SessionController.store);

routes.get('/', (req, res) => res.send('DESAFIO NODE CONCRETE SOLUTIONS'));

routes.get('/search/:id', authMiddlewares, SearchContoller.index);

export default routes;
