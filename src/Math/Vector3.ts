import { IVector3 } from "./IVector3";

export class Vector3{

  constructor(
    public x:number,
    public y:number,
    public z:number
  ){}

  public static CreateFromInterface(obj:IVector3):Vector3{
    return new Vector3(obj.x,obj.y,obj.z);
  }
}