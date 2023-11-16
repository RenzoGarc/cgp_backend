import EstadoCivil from "../../models/maestros/estadoCivil.js";

export class EstadoCivilService {
  async getAll() {
    try {
      const data = await EstadoCivil.findAll();
      if (!data) {
        throw new Error("Estado civil no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los estado civil...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await EstadoCivil.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el estado civil.");
    }
  }

  async getById(id) {
    try {
      const data = await EstadoCivil.findByPk(id);
      if (!data) {
        throw new Error("Estado civil no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el estado civil por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await EstadoCivil.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el estado civil.");
    }
  }

  async delete(id) {
    try {
      const data = await EstadoCivil.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el estado civil.");
    }
  }
}
