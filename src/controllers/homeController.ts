import { Request, Response } from "express";
import { Orders } from "../model/orders"


export const Home = async (req: Request, res: Response) => {
    let result = await Orders.create({
        precoOrdem: "5000",
        descricaoOrdem: "test test test test",
        idAparelho: 1,
        idTipoServico: 1,
        idCliente: 300,
        idStatus: 4
    });

    let list = await Orders.findAll()
    res.json(list)
}