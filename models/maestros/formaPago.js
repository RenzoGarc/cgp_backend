import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const FormaPago = sequelize.define(
  "formapago",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default FormaPago;
