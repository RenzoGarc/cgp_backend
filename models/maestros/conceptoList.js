import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const ConceptoList = sequelize.define(
  "conceptolist",
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
    conceptolistcol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    schema: "public",
  }
);

export default ConceptoList;
