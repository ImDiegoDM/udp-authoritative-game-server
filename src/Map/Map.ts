import { BoxObject } from "../GameObject";
import { IMap } from "./IMap";

export type MapObject = BoxObject

export class Map{
  constructor(
    public objects: MapObject[]
  ){}

  public static CreateFromInterface(obj:IMap):Map{
    const mapObjs: MapObject[] = [];

    for (const mapObj of obj.objects) {
      switch (mapObj.type) {
        case "box":
          mapObjs.push(BoxObject.CreateFromInterface(mapObj.data))
          break;
      }
    }

    return new Map(mapObjs);
  }
}