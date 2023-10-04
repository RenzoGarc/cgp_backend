import SancionFraccion from "../../models/maestros/sancionFraccion.js";

export class SancionFraccionService {
  async getAll() {
    try {
      const data = await SancionFraccion.findAll();
      if (!data) {
        throw new Error("Sancion Fraccion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Sancion Fraccion...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await SancionFraccion.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Sancion Fraccion.");
    }
  }

  async getById(id) {
    try {
      const data = await SancionFraccion.findByPk(id);
      if (!data) {
        throw new Error("Sancion Fraccion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Sancion Fraccion por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await SancionFraccion.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Sancion Fraccion.");
    }
  }

  async delete(id) {
    try {
      const data = await SancionFraccion.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Sancion Fraccion.");
    }
  }
}
