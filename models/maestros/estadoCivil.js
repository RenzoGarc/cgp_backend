import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const EstadoCivil = sequelize.define(
  "estadocivil",
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
  },
  {
    schema: "public",
  }
);

export default EstadoCivil;
