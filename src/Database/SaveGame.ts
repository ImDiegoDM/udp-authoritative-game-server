import { Game } from "../Game";
import { Execute } from "./Database";
import { GAMECOLLECTION } from "./game-collection";


export function SaveGame(game:Game){
  return Execute((db)=>{
    return new Promise((res,rej)=>{
      const gameColection = db.collection(GAMECOLLECTION);
      
      gameColection.insert(game,(err,result)=>{
        if(err != null){
          rej();
          return;
        }
        res(result);
      });
    });
  })
}