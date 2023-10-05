import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Colegiado = sequelize.define(
  "colegiado",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    fechanacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lugarnacimiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_provincia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_distrito: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    zona: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lugarresidencia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    centrolaboral: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ocupacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    universidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fraccionamiento: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    difunto: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    padron: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url_foto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fechainscripcion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    idestadocivil: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Colegiado;
