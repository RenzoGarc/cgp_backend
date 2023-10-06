import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Departamento = sequelize.define(
  "sp_departamentos",
  {
    iddpto: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nombdpto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "espaciales",
  }
);

export default Departamento;
