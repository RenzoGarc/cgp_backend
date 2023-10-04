import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const OperadorTelf = sequelize.define(
  "operadortelf",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    operador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default OperadorTelf;
