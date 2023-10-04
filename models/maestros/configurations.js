import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Configurations = sequelize.define(
  "configurations",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    presidente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secretaria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlpresidente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlsecretaria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Configurations;
