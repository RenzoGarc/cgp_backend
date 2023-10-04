import Recibo from "../../models/maestros/recibo.js";

export class ReciboService {
  async getAll() {
    try {
      const data = await Recibo.findAll();
      if (!data) {
        throw new Error("Recibo no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Recibo...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await Recibo.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Recibo.");
    }
  }

  async getById(id) {
    try {
      const data = await Recibo.findByPk(id);
      if (!data) {
        throw new Error("Recibo no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Recibo por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Recibo.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Recibo.");
    }
  }

  async delete(id) {
    try {
      const data = await Recibo.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Recibo.");
    }
  }
}
