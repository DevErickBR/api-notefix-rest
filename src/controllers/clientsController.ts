import { Request, Response } from "express";
import { clients } from "../model/clients";


export const Clients = async (req: Request, res: Response) => {
    let result = await clients.findAll()
    res.json(result);
};

export const Client = async (req: Request, res: Response) => {
    let slug = req.params.slug;
    let result = await clients.findAll({
        where: {
            idCliente: slug
        }
    })
    res.json(result)
}