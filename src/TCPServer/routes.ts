import { Express } from 'express';
import MapGameRoutes from './Games'

export default function(app:Express){
  MapGameRoutes(app);
}