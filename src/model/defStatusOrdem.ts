import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql"

interface DefStatusOrdem extends Model {
    idStatus: number,
    statusOrdem: string
}

export const defStatusOrdem = sequelize.define("defStatusOrdem", {
    idStatus: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.BIGINT
    },
    statusOrdem: {
        type: DataTypes.CHAR(40),
        allowNull: false,
        unique: true
    }

},
    {
        tableName: 'def_status_ordem',
        timestamps: false
    })