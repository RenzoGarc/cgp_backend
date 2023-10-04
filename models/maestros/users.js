import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol_poder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    remember_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Users;
