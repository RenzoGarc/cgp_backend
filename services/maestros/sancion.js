import Sancion from "../../models/maestros/sancion.js";

export class SancionService {
  async getAll() {
    try {
      const data = await Sancion.findAll();
      if (!data) {
        throw new Error("Sancion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Sancion...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await Sancion.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Sancion.");
    }
  }

  async getById(id) {
    try {
      const data = await Sancion.findByPk(id);
      if (!data) {
        throw new Error("Sancion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Sancion por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Sancion.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Sancion.");
    }
  }

  async delete(id) {
    try {
      const data = await Sancion.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Sancion.");
    }
  }
}
