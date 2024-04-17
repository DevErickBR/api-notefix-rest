import { Request, Response } from "express";
import { aparelhos } from "../model/aparelhos";

export const Aparelhos = async (req: Request, res: Response) => {
    let list = await aparelhos.findAll()
    res.json(list)
}