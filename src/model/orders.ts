import { Model, DataTypes, ForeignKey } from "sequelize";
import { sequelize } from "../instances/mysql";
import { toUSVString } from "util";
import { aparelhos } from "./aparelhos";
import { DefTipoServico } from "./defTiporServicos";
import { clients } from "./clients";
import { defStatusOrdem } from "./defStatusOrdem";

interface OrdersInstance extends Model {
    idOrdens: number,
    dataInicioOrdem: Date,
    dataFimOrdem: Date,
    precoOrdem: string,
    descricaoOrdem: string
}

export const Orders = sequelize.define<OrdersInstance>("Orders", {
    idOrdens: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true
    },
    dataInicioOrdem: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    dataFimOrdem: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    precoOrdem: {
        type: DataTypes.CHAR(70),
        allowNull: true
    },
    descricaoOrdem: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
    {
        tableName: 'ordens_de_servico',
        timestamps: false
    }
)

Orders.belongsTo(aparelhos, {
    foreignKey: 'idAparelho'
})

Orders.belongsTo(DefTipoServico, {
    foreignKey: 'idTipoServico'
})

Orders.belongsTo(clients, {
    foreignKey: 'idCliente'
})

Orders.belongsTo(defStatusOrdem, {
    foreignKey: 'idStatus'
})