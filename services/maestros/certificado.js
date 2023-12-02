import Certificado from "../../models/maestros/certificado.js";
import Pago from "../../models/maestros/pago.js";

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
    codcertificado,
    cantidad,
    fechaemision,
    observacion,
    idpago,
    idtipoentrega,
    idtipocertificado
  ) {
    try {
      const data = await Certificado.create({
        codcertificado,
        cantidad,
        fechaemision,
        observacion,
        idpago,
        idtipoentrega,
        idtipocertificado,
        // idpago: data1.id,
      });
      return data;
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
