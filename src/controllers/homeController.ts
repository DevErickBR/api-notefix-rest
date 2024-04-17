import { Request, Response } from "express";
import { Orders } from "../model/orders"


export const Home = async (req: Request, res: Response) => {

    let list = await Orders.findAll()
    res.json(list)
}