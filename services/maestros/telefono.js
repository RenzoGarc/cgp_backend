import Telefono from "../../models/maestros/telefono.js";

export class TelefonoService {
  async getAll() {
    try {
      const data = await Telefono.findAll();
      if (!data) {
        throw new Error("Telefono no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los telefono...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await Telefono.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el telefono.");
    }
  }

  async getById(id) {
    try {
      const data = await Telefono.findByPk(id);
      if (!data) {
        throw new Error("Telefono no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el telefono por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Telefono.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el telefono.");
    }
  }

  async delete(id) {
    try {
      const data = await Telefono.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el telefono.");
    }
  }
}
