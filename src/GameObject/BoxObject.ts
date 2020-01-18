import { Vector3 } from "../Math/Vector3";
import { IBoxObject } from "./IBoxObject";

export class BoxObject{
  constructor(
    public center:Vector3,
    public extend:Vector3
  ){}

  public static CreateFromInterface(obj:IBoxObject):BoxObject{
    return new BoxObject(
      Vector3.CreateFromInterface(obj.center),
      Vector3.CreateFromInterface(obj.extend)
    );
  }
}