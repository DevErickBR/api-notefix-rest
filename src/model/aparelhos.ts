import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

interface Aparelhos extends Model {
    idAparelho: number,
    serialAparelho: string,
    marcaAparelho: string,
    modeloAparelho: string
}

export const aparelhos = sequelize.define<Aparelhos>('aparelhos', {
    idAparelho: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.BIGINT
    },
    serialAparelho: {
        allowNull: false,
        type: DataTypes.CHAR(90),
        unique: true
    },
    marcaAparelho: {
        allowNull: false,
        type: DataTypes.CHAR(100)
    },
    modeloAparelho: {
        allowNull: false,
        type: DataTypes.CHAR(100)
    }
},

    {
        tableName: 'aparelhos',
        timestamps: false
    }

)