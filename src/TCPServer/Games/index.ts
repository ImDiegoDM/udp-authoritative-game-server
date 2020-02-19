import { Express } from 'express';
import get from './get';
import post, { validator } from './post';

const baseRoute = '/api/v1/games';

export default function(app:Express){
  app.get(baseRoute,get);
  app.post(baseRoute,validator,post);
}