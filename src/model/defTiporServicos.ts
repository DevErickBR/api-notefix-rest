import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

interface DefTipoServico extends Model {
    idTipoServico: number,
    tipoServico: string
}

export const DefTipoServico = sequelize.define<DefTipoServico>('DefTipoServico', {
    idTipoServico: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true
    },
    tipoServico: {
        type: DataTypes.CHAR(50),
        allowNull: false,
        unique: true,
    }
},
    {
        tableName: 'def_tipos_servicos',
        timestamps: false
    }
)