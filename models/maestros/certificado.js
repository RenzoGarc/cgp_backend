import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Certificado = sequelize.define(
  "certificado",
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
    idtipoentrega: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idtipocertificado: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Certificado;
