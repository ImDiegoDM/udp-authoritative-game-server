import { Request, Response } from "express";

export default function(_:Request,res:Response){
  res.send("working");
}