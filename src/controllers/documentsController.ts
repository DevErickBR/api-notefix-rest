import { Request, Response } from "express";
import { defDocumento } from "../model/defDocumento";

export const Documents = async (req: Request, res: Response) => {
    let result = await defDocumento.findAll()
    res.json(result)
}