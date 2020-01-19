import { Express } from 'express';
import get from './get';

const baseRoute = '/api/v1/games';

export default function(app:Express){
  app.get(baseRoute,get)
}