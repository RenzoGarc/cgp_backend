import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Votacion = sequelize.define(
  "votacion",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Votacion;
