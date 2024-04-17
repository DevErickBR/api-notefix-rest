import { DataTypes, Model } from "sequelize";
import { sequelize } from "../instances/mysql";


interface DefDocumento extends Model {
    idTipoDocumento: number,
    tipoDocumento: string
};

export const defDocumento = sequelize.define<DefDocumento>("defDocumento", {
    idTipoDocumento: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true
    },
    tipoDocumento: {
        type: DataTypes.CHAR(5),
        allowNull: false
    }
},

    {
        tableName: "def_tipo_documento",
        timestamps: false
    }

)
