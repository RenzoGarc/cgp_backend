import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const AsistenciaVotacion = sequelize.define(
  "asistenciavotacion",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    votacionobservacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idvotacion: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idcolegiado: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default AsistenciaVotacion;
