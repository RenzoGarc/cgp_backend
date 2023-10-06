import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Distrito = sequelize.define(
  "sp_distritos",
  {
    iddist: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    idprov: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombdist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "espaciales",
  }
);

export default Distrito;
