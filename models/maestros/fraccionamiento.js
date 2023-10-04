import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Fraccionamiento = sequelize.define(
  "fraccionamiento",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechafraccionamiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    concepto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nsolicitud: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ndeclaracion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idcolegiado: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    iscanceled: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Fraccionamiento;
