import {Map} from '../Map';
import { Player } from '../Player/Player';
import { IGame } from './IGame';

export class Game{
  public state: "WAITING" | "STARTED" | "ENDED";
  public map:Map;
  public players:Player[];

  constructor(map:Map,player:Player|Player[]) {
    this.state = "WAITING";
    this.map = map;

    if(Array.isArray(player)){
      this.players = player;
      return;
    }
    
    player.collider.center = map.playersPositions[0].center;
    player.collider.extend = map.playersPositions[0].extend;

    this.players = [
      player
    ];
  }

  public static CreateFromInterface(obj:IGame){
    const players:Player[] = [];
    for (const p of obj.players) {
      players.push(Player.CreateFromInterface(p));
    }

    return new Game(
      Map.CreateFromInterface(obj.map),
      players
    )
  }

  public Join(player:Player):boolean{
    if(this.state == "WAITING" && this.players.length < this.map.playerLimit){
      player.collider.center = this.map.playersPositions[this.players.length].center;
      player.collider.extend = this.map.playersPositions[this.players.length].extend;
      player.id = this.players.length;
      this.players.push(player);
      return true;
    }

    return false;
  }

  public Quit(player:Player):boolean{
    if(this.state == "WAITING"){
      this.players.splice(player.id,1);
      return true;
    }

    return false;
  }
}