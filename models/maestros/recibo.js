import { DataTypes } from "sequelize";
import { sequelize } from "../../config/postgres/sequelize.js";

const Recibo = sequelize.define(
  "recibo",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fechapago: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    urlvoucher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ncomprobante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

export default Recibo;
