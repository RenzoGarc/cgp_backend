import TipoCertificado from "../../models/maestros/tipoCertificado.js";

export class TipoCertificadoService {
  async getAll() {
    try {
      const data = await TipoCertificado.findAll();
      if (!data) {
        throw new Error("Tipo Certificado no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los tipo certificado...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await TipoCertificado.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el tipo certificado.");
    }
  }

  async getById(id) {
    try {
      const data = await TipoCertificado.findByPk(id);
      if (!data) {
        throw new Error("Tipo Certificado no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el tipo certificado por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await TipoCertificado.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el tipo certificado.");
    }
  }

  async delete(id) {
    try {
      const data = await TipoCertificado.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el tipo certificado.");
    }
  }
}
