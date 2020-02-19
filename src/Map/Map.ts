import { BoxObject } from "../GameObject";
import { IMap } from "./IMap";

export type MapObject = BoxObject

export class Map{
  constructor(
    public objects: MapObject[],
    public playersPositions: BoxObject[],
    public playerLimit: number
  ){}

  public static CreateFromInterface(obj:IMap):Map{
    const mapObjs: MapObject[] = [];
    const playersPositions: BoxObject[] = [];

    for (const mapObj of obj.objects) {
      switch (mapObj.type) {
        case "box":
          mapObjs.push(BoxObject.CreateFromInterface(mapObj.data))
          break;
      }
    }

    for (const pPosition of obj.playersPositions) {
      playersPositions.push(BoxObject.CreateFromInterface(pPosition))
    }

    return new Map(mapObjs,playersPositions,obj.playersPositions.length);
  }
}