import Configurations from "../../models/maestros/configurations.js";

export class ConfigurationsService {
  async getAll() {
    try {
      const data = await Configurations.findAll();
      if (!data) {
        throw new Error("Configurations no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Configurations...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await Configurations.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Configurations.");
    }
  }

  async getById(id) {
    try {
      const data = await Configurations.findByPk(id);
      if (!data) {
        throw new Error("Configurations no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Configurations por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Configurations.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Configurations.");
    }
  }

  async delete(id) {
    try {
      const data = await Configurations.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Configurations.");
    }
  }
}
