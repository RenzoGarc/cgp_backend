import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const IngresoDetail = sequelize.define(
  "ingresos_view",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descripcion_pago: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motivo_pago: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_pago: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    id_recibo: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    nro_comprobante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    forma_pago: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_colegiado: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_concepto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre_concepto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo_colegiado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    schema: "public",
  }
);

export default IngresoDetail;
