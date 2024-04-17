import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { defDocumento } from "./defDocumento"
import { Orders } from "./orders";

interface ClientsInstace extends Model {
    idCliente: number,
    nomeCliente: string,
    telefoneCliente: string,
    idTipoDocumento: number,
    documentoCliente: string
};

export const clients = sequelize.define<ClientsInstace>('Clients', {
    idCliente: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false
    },

    nomeCliente: {
        type: DataTypes.CHAR(100),
        allowNull: false
    },

    telefoneCliente: {
        type: DataTypes.CHAR(20),
        allowNull: false
    },

    emailCliente: {
        type: DataTypes.CHAR(100),
        allowNull: true,
    },

    documentoCliente: {
        type: DataTypes.CHAR(20),
        allowNull: true
    }
},
    {
        tableName: "clientes",
        timestamps: false
    })

clients.belongsTo(defDocumento, {
    constraints: true,
    foreignKey: 'idTipoDocumento'
});

clients.hasMany(Orders);