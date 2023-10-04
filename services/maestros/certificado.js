import Certificado from "../../models/maestros/certificado.js";

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

  async create(estado) {
    try {
      const data = await Certificado.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Certificado.");
    }
  }

  async getById(id) {
    try {
      const data = await Certificado.findByPk(id);
      if (!data) {
        throw new Error("Certificado no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Certificado por ID.");
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
