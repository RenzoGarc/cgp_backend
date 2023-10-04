import Colegiado from "../../models/maestros/colegiado.js";

export class ColegiadoService {
  async getAll() {
    try {
      const data = await Colegiado.findAll();
      if (!data) {
        throw new Error("Colegiado no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Colegiado...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await Colegiado.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Colegiado.");
    }
  }

  async getById(id) {
    try {
      const data = await Colegiado.findByPk(id);
      if (!data) {
        throw new Error("Colegiado no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Colegiado por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Colegiado.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Colegiado.");
    }
  }

  async delete(id) {
    try {
      const data = await Colegiado.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Colegiado.");
    }
  }
}
