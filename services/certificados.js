import { Op } from "sequelize";
import CertificadosDetail from "../models/certificado/certificados.js";
export class CertificadosService {
  async createCertificados(
    codigo_certif,
    cantidad,
    observacion,
    numcomprobante,
    entrega,
    nombre,
    fecha,
    id_colegiado,
    monto,
    forma_pago,
    type,
    codigo
  ) {
    try {
      const dataUpdate = await CertificadosDetail.update(
        {
          codigo_certif,
          cantidad,
          observacion,
          numcomprobante,
          entrega,
          nombre,
          fecha,
          id_colegiado,
          monto,
          forma_pago,
          type,
          codigo,
        },
        { where: { id_colegiado } }
      );
      const data = await CertificadosDetail.create({
        codigo_certif,
        cantidad,
        observacion,
        numcomprobante,
        entrega,
        nombre,
        fecha,
        id_colegiado,
        monto,
        forma_pago,
        type,
        codigo,
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  async getDetail() {
    try {
      const data = await CertificadosDetail.findAll();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
  async getDetailByfecha(fecha_ini, fecha_fin) {
    try {
      const data = await CertificadosDetail.findAll({
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
