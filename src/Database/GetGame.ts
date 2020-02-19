import { IGame } from "../Game/IGame";
import { Execute } from "./Database";
import { GAMECOLLECTION } from "./game-collection";

export function GetGames(){
  return Execute<IGame[]>((db)=>{
    const gameColection = db.collection<IGame>(GAMECOLLECTION);
    return gameColection.find({}).toArray();
  });
}