import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Ingresos1 = sequelize.define(
  "ingreso",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cod_colegiado_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    num_comprobante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_recibo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Ingresos1;
