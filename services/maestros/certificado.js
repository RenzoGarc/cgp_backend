import Certificado from "../../models/maestros/certificado.js";
import Pago from "../../models/maestros/pago.js";
import Recibo from "../../models/maestros/recibo.js";

export class CertificadoService {
  async getAll() {
    try {
      const data = await Certificado.findAll();
      if (!data) {
        throw new Error("Certificado no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Certificado...." + error);
    }
  }

  // async getOne() {
  //   try {
  //     const data = await Certificado.findOne({ where: { codcertificado } });
  //     if (!data) {
  //       throw new Error("Certificado no encontrado.");
  //     }
  //     return data;
  //   } catch (error) {
  //     throw new Error("Error al obtener el Certificado...." + error);
  //   }
  // }
  //
  async getAllById(id) {
    try {
      const data = await Certificado.findAll({ where: { id } });
      if (!data) {
        throw new Error("Certificado no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Certificado...." + error);
    }
  }

  async create(
    cantidad,
    fechaemision,
    observacion,
    idtipoentrega,

    monto,
    idcolegiado,
    fechapago,
    ncomprobante,
    idformapago
  ) {
    try {
      const datapago = await Pago.create({
        monto,
        fechapago,
        idcolegiado,
        ncomprobante,
        idformapago,
        idconceptolist: 2,
      });
      const datacertificado = await Certificado.create({
        codcertificado: "temporal",
        cantidad,
        fechaemision,
        observacion,
        idtipoentrega,
        idtipocertificado: 2,
        idpago: datapago.id,
      });
      await Certificado.update(
        { codcertificado: "CGP-CH-2023-" + datacertificado.id },
        { where: { id: datacertificado.id } }
      );
      return datacertificado;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Certificado.");
    }
  }

  async getById(id) {
    try {
      const data = await Certificado.findAll({
        where: { id: id },
      });
      if (!data) {
        throw new Error("Certificado no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Certificado por ID." + error);
    }
  }

  async update(id, estado) {
    try {
      const data = await Certificado.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Certificado.");
    }
  }

  async delete(id) {
    try {
      const data = await Certificado.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Certificado.");
    }
  }
}
