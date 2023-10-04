import Multa from "../../models/maestros/multa.js";

export class MultaService {
  async getAll() {
    try {
      const data = await Multa.findAll();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener los Multa...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await Multa.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Multa.");
    }
  }

  async getById(id) {
    try {
      const data = await Multa.findByPk(id);
      if (!data) {
        throw new Error("Multa no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Multa por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Multa.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Multa.");
    }
  }

  async delete(id) {
    try {
      const data = await Multa.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Multa.");
    }
  }
}
