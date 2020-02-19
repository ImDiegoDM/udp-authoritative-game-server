import { IVector3 } from "./IVector3";

export class Vector3{

  public static zero:Vector3 = new Vector3(0,0,0);

  constructor(
    public x:number,
    public y:number,
    public z:number
  ){}

  public static CreateFromInterface(obj:IVector3):Vector3{
    return new Vector3(obj.x,obj.y,obj.z);
  }
}