import { Router } from 'express';
import cors from 'cors';
import { simpleGet, simplePost, simplePut, simpleDelete } from '../controllers/simpleController'
import whitelist from '../middlewares/whitelist';

export const simpleRoute = Router();

simpleRoute.get('/get', cors(whitelist.clientOptionsLimited), simpleGet)
simpleRoute.post('/post', cors(whitelist.clientOptionsLimited), simplePost)
simpleRoute.put('/put', cors(whitelist.clientOptionsLimited), simplePut)
simpleRoute.delete('/delete', cors(whitelist.clientOptionsLimited), simpleDelete)