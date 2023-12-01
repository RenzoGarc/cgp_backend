import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const CertificadosDetail = sequelize.define(
  "certificados",
  {
    id_certificado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    codigo_certif: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numcomprobante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entrega: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_colegiado: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    forma_pago: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    schema: "public",
  }
);

export default CertificadosDetail;
