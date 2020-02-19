import { IMap } from "../Map";
import { IPlayer } from "../Player";

export interface IGame{
  state: "WAITING" | "STARTED" | "ENDED";
  map:IMap;
  players:IPlayer[];
}