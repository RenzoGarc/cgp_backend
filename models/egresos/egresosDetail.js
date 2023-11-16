import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const EgresosDetail = sequelize.define(
  "egresos_view",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_colegiado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    schema: "public",
  }
);

export default EgresosDetail;
