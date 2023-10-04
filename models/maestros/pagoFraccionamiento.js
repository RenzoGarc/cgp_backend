import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const PagoFraccionamiento = sequelize.define(
  "pagofraccionamiento",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idpago: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idcolfrac: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idconcepto: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default PagoFraccionamiento;
