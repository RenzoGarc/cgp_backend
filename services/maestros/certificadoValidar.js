import CertificadoValidar from "../../models/maestros/certificadoValidar.js";

export class CertificadoValidarService {
  async getAll() {
    try {
      const data = await CertificadoValidar.findAll();
      if (!data) {
        throw new Error("CertificadoValidar no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el CertificadoValidar...." + error);
    }
  }

  async create(
    codcertificado,
    cantidad,
    fechaemision,
    observacion,
    idpago,
    tipo_entrega_nombre,
    tipo_certificado_nombre,
    nombre_colegiado
  ) {
    console.log(
      codcertificado,
      cantidad,
      fechaemision,
      observacion,
      idpago,
      tipo_entrega_nombre,
      tipo_certificado_nombre,
      nombre_colegiado
    );
    try {
      const data = await CertificadoValidar.create({
        codcertificado,
        cantidad,
        fechaemision,
        observacion,
        idpago,
        tipo_entrega_nombre,
        tipo_certificado_nombre,
        nombre_colegiado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el CertificadoValidar.");
    }
  }

  async getById(id) {
    try {
      const data = await CertificadoValidar.findAll({
        where: { idcolegiado: id },
      });
      if (!data) {
        throw new Error("CertificadoValidar no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el CertificadoValidar por ID.");
    }
  }

  async update(
    id,
    codcertificado,
    cantidad,
    fechaemision,
    observacion,
    idpago,
    tipo_entrega_nombre,
    tipo_certificado_nombre,
    nombre_colegiado
  ) {
    try {
      const data = await CertificadoValidar.update(
        {
          codcertificado,
          cantidad,
          fechaemision,
          observacion,
          idpago,
          tipo_entrega_nombre,
          tipo_certificado_nombre,
          nombre_colegiado,
        },
        { where: { id } }
      );
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el CertificadoValidar.");
    }
  }

  async delete(id) {
    try {
      const data = await CertificadoValidar.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el CertificadoValidar.");
    }
  }
}
