import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Multa = sequelize.define(
  "multa",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idasistencia: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idpago: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Multa;
