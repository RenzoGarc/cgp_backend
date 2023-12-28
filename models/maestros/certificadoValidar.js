import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const CertificadoValidar = sequelize.define(
  "certificado_validar",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    codcertificado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaemision: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idpago: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    tipo_entrega_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_certificado_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre_colegiado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default CertificadoValidar;
