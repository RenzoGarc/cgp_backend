import MultaFraccion from "../../models/maestros/multaFraccion.js";

export class MultaFraccionService {
  async getAll() {
    try {
      const data = await MultaFraccion.findAll();
      if (!data) {
        throw new Error("Multa Fraccion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener Multa Fraccion...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await MultaFraccion.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Multa Fraccion.");
    }
  }

  async getById(id) {
    try {
      const data = await MultaFraccion.findByPk(id);
      if (!data) {
        throw new Error("Multa Fraccion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Multa Fraccion por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await MultaFraccion.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Multa Fraccion.");
    }
  }

  async delete(id) {
    try {
      const data = await MultaFraccion.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Multa Fraccion.");
    }
  }
}
