import { Request, Response } from "express";
import { GetGames } from "../../Database/GetGame";

export default async function(_:Request,res:Response){
  try {
    const games = await GetGames();
    console.log(games)
    res.send(games);
  } catch (error) {
    res.status(500).send("opss.. an internal server error has ocurred");
  }
}