import { Request, Response } from "express";
import { clients } from "../model/clients";
import { Op } from "sequelize";


export const Clients = async (req: Request, res: Response) => {
    let result = await clients.findAll()
    res.json(result);
};

export const Client = async (req: Request, res: Response) => {
    let slug = req.params.slug;
    let result = await clients.findAll({
        where: {
            nomeCliente: {
                [Op.like]: `%${slug}%`
            }
        }
    });

    res.json(result);
};

export const CreatClient = async (req: Request, res: Response) => {
    let { nomeCliente, telefoneCliente, emailCliente, documentoCliente, idTipoDocumento } = req.body

    await clients.create(
        { nomeCliente, telefoneCliente, emailCliente, documentoCliente, idTipoDocumento }
    );
    res.json({ nomeCliente, telefoneCliente, documentoCliente, emailCliente, idTipoDocumento })
};

export const DeleteClient = async (req: Request, res: Response) => {
    let idCliente = req.params.slug

    await clients.destroy({
        where: {
            idCliente
        }
    })

};