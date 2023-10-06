import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Provincia = sequelize.define(
  "sp_provincias",
  {
    idprov: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    iddpto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombprov: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "espaciales",
  }
);

export default Provincia;
