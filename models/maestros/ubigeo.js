import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Ubigeo = sequelize.define(
  "ubigeo",
  {
    id_ubigeo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_ubigeo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo_ubigeo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    etiqueta_ubigeo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buscador_ubigeo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_hijos_ubigeo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nivel_ubigeo: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    id_padre_ubigeo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Ubigeo;
