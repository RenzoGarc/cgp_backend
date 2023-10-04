import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const colegiadoFraccionamiento = sequelize.define(
  "colegiadofraccionamiento",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    mes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monto: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    idfraccionamiento: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default colegiadoFraccionamiento;
