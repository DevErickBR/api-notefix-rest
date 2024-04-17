import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { aparelhos } from "./aparelhos"

interface GarantiaAparelhos extends Model {
    idGarantiaAparelho: number,
    dataInicioGarantiaAparelho: Date,
    dataFimGarantiaAparelho: Date
}

export const garantiaAparelhos = sequelize.define<GarantiaAparelhos>('garantiaAparelhos', {
    idGarantiaAparelho: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.BIGINT
    },
    dataInicioGarantiaAparelho: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    dataFimGarantiaAparelho: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
    {
        tableName: 'garantia_aparelhos',
        timestamps: false
    }
)

garantiaAparelhos.hasOne(aparelhos, {
    foreignKey: 'idAparelho',
    constraints: true
})