import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Telefono = sequelize.define(
  "telefono",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idcolegiado: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idoperador: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Telefono;
