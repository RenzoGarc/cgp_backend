import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Sancion = sequelize.define(
  "sancion",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tiempo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monto: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    observacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idcolegiado: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Sancion;
