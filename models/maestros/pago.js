import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Pago = sequelize.define(
  "pago",
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
    fechapago: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    idcolegiado: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    idrecibo: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    idformapago: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    idconceptolist: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    idconcepto: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    conceptotext: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    schema: "public",
  }
);

export default Pago;
