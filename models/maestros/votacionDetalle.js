import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const VotacionDetalle = sequelize.define(
  "votacion_detalle",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad_a: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad_f: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default VotacionDetalle;
