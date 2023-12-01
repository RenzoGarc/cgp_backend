import Votacion from "../../models/maestros/votacion.js";

export class VotacionService {
  async getAll() {
    try {
      const data = await Votacion.findAll();
      if (!data) {
        throw new Error("Votacion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los votacion...." + error);
    }
  }

  async create(anio, monto) {
    try {
      const data = await Votacion.create({
        anio,
        monto,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el votacion.");
    }
  }

  async getById(id) {
    try {
      const data = await Votacion.findByPk(id);
      if (!data) {
        throw new Error("Votacion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el votacion por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Votacion.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el votacion.");
    }
  }

  async delete(id) {
    try {
      const data = await Votacion.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el votacion.");
    }
  }
}
