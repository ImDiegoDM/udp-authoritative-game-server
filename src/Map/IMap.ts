import { IMapObject } from "./IMapObject";
import { IBoxObject } from "../GameObject";

export interface IMap{
  objects:IMapObject[];
  playersPositions:IBoxObject[];
}