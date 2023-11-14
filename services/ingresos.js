import Pago from "../models/ingresos/ingresos.js";
import IngresoDetail from "../models/ingresos/ingresosDetail.js";
import { Op } from "sequelize";
export class IngresosService {
  async createPago(
    monto,
    idcolegiado,
    idrecibo,
    idformapago,
    idconceptolist,
    idconcepto,
    conceptotext,
    description
  ) {
    try {
      const data = await Pago.create({
        monto,
        idcolegiado,
        idrecibo,
        idformapago,
        idconceptolist,
        idconcepto,
        conceptotext,
        description,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async getDetail() {
    try {
      const data = await IngresoDetail.findAll({
        order: [["created_at", "DESC"]],
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getDetailByFecha(fecha_ini, fecha_fin) {
    try {
      const data = await IngresoDetail.findAll({
        where: {
          fecha_pago: { [Op.between]: [fecha_ini, fecha_fin] },
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
