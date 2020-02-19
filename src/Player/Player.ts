import { BoxObject } from "../GameObject";
import { IPlayer } from "./IPlayer";

export class Player{

  constructor(
    public ip:string,
    public collider:BoxObject,
    public id:number
  ){}

  public static CreateFromInterface(obj:IPlayer){
    return new Player(obj.ip,BoxObject.CreateFromInterface(obj.collider),obj.id);
  }
}