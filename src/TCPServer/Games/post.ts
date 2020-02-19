import { Request, Response } from "express";
import { check, validationResult } from 'express-validator';
import * as map1 from '../../map_1.json';
import { Game } from "../../Game";
import { Map } from "../../Map/Map";
import { Player } from "../../Player/Player";
import { BoxObject } from "../../GameObject/index";
import { Vector3 } from "../../Math/index";
import { Dictionary } from "../../dictionary";
import { IMap } from "../../Map/IMap";
import { SaveGame } from "../../Database/SaveGame";

const maps:Dictionary<IMap> = {
  "map_1":map1
}

export const validator = [
  check('map')
    .isIn(Object.keys(maps))
    .withMessage(
      "the map should be in one of this values: " + 
      Object.keys(maps).toString()
    )
]

export default async function(req:Request,res:Response){
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const ip = req.ip.replace('::ffff:','');
  const map:string = req.body.map;
  const game = new Game(
    Map.CreateFromInterface(maps[map]),
    new Player(ip,new BoxObject(Vector3.zero,Vector3.zero),0)
  );
  try {
    await SaveGame(game);
    res.send("Game created successful");
  } catch (error) {
    res.status(500).send("opss.. an internal server error has ocurred");
  }
}