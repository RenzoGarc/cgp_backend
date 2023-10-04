import Fraccionamiento from "../../models/maestros/fraccionamiento.js";

export class FraccionamientoService {
  async getAll() {
    try {
      const data = await Fraccionamiento.findAll();
      if (!data) {
        throw new Error("Fraccionamiento no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Fraccionamiento...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await Fraccionamiento.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Fraccionamiento.");
    }
  }

  async getById(id) {
    try {
      const data = await Fraccionamiento.findByPk(id);
      if (!data) {
        throw new Error("Fraccionamiento no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Fraccionamiento por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Fraccionamiento.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Fraccionamiento.");
    }
  }

  async delete(id) {
    try {
      const data = await Fraccionamiento.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Fraccionamiento.");
    }
  }
}
