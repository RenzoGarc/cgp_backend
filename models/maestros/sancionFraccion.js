import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const SancionFraccion = sequelize.define(
  "sancionfraccion",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idsancion: {
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

export default SancionFraccion;
