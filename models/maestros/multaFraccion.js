import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const MultaFraccion = sequelize.define(
  "multafraccion",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idasistencia: {
      type: DataTypes.BIGINT,
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

export default MultaFraccion;
