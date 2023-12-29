import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Egreso = sequelize.define(
  "egreso",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    conceptotext: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaegreso: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    idcolegiado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idconceptolist: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    schema: "public",
  }
);

export default Egreso;
