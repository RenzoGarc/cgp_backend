import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Pago = sequelize.define(
  "pago",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fechapago: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    idcolegiado: {
      type: DataTypes.BIGINT,
    },
    idrecibo: {
      type: DataTypes.BIGINT,
    },
    idformapago: {
      type: DataTypes.BIGINT,
    },
    idconceptolist: {
      type: DataTypes.BIGINT,
    },
    idconcepto: {
      type: DataTypes.INTEGER,
    },
    conceptotext: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    schema: "public",
  }
);

export default Pago;
