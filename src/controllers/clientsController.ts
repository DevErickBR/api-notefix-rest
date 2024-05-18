import { Request, Response } from "express";
import { clients } from "../model/clients";
import { Op, where } from "sequelize";


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
    ).catch(error => console.log(error));
    res.json({ nomeCliente, telefoneCliente, documentoCliente, emailCliente, idTipoDocumento })
};

export const DeleteClient = async (req: Request, res: Response) => {
    let idCliente = req.params.slug

    await clients.destroy({
        where: {
            idCliente
        }
    }).catch(error => console.log(error))

};

export const UpdateClient = async (req: Request, res: Response) => {
    let { idCliente, nomeCliente, telefoneCliente, emailCliente, documentoCliente, idTipoDocumento } = req.body

    await clients.update({
        idCliente,
        nomeCliente,
        telefoneCliente,
        emailCliente,
        documentoCliente,
        idTipoDocumento
    }, {
        where: {
            idCliente
        }
    }).then((response) => res.json({ response, msg: 'Atualizado com sucesso!' })).
        catch(error => res.json({ msg: 'Erro! consulte todos os campos', error: error }))


}