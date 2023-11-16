import EgresosDetail from "../models/egresos/egresosDetail.js";
import { Op } from "sequelize";
export class EgresosService {
  async getDetail() {
    try {
      const data = await EgresosDetail.findAll();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
  async getDetailByfecha(fecha_ini, fecha_fin) {
    try {
      const data = await EgresosDetail.findAll({
        where: {
          fecha: { [Op.between]: [fecha_ini, fecha_fin] },
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
